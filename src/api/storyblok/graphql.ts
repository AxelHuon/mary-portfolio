// @ts-nocheck
import { unstable_cache } from 'next/cache';

import { STORYBLOK_VERSION } from './version';

/**
 * @typedef {import('./version.js').StoryblokVersion} StoryblokVersion
 */

const STORYBLOK_GRAPHQL_URL = 'https://gapi.storyblok.com/v1/api';

export const ITEM_ROOT_FIELDS = `
  id
  uuid
  is_startpage
  published_at
  slug
  full_slug
`;

export const CONTENT_ROOT_FIELDS = `
  _editable
  _uid
  component
`;

/**
 * QueryFy
 *
 * Transform object to structured request chain
 *
 * @param {Record<string, unknown>} object
 * @returns {string | unknown}
 */
export const queryfy = (object: Record<string, unknown>, {} = {}): string | unknown => {
  if (typeof object === 'number') {
    return object;
  }

  if (typeof object !== 'object' || object === null || Array.isArray(object)) {
    return JSON.stringify(object);
  }

  let props = Object.keys(object)
    .map(key => {
      const value = object[key];

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return `${key}:${queryfy(value as Record<string, unknown>)}`;
      } else {
        return `${key}:${JSON.stringify(value)}`;
      }
    })
    .join(',');

  return `{${props}}`;
};

/**
 * @typedef {Object} QraphQlQueryParams
 * @property {Object} body
 * @property {StoryblokVersion} [version=STORYBLOK_VERSION.PUBLISHED]
 */

/**
 * @param {QraphQlQueryParams} params
 */
const nonCachedGraphQlQuery = ({
  body,
  version = STORYBLOK_VERSION.PUBLISHED,
}: {
  body: {
    query: string;
    variables: {
      by_slugs: string;
      by_uuids: string;
      resolve_relations: string;
    };
  };
  version: string;
}) => {
  return fetch(STORYBLOK_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Token: `${process.env.STORYBLOK_API_KEY}`,
      Version: version,
    },
    body: JSON.stringify(body),
    next: version === STORYBLOK_VERSION.DRAFT ? { revalidate: 0 } : { tags: ['storyblok'] },
  })
    .then(res => {
      return res.json();
    })
    .catch(error => {
      return error;
    });
};

/**
 * @param {QraphQlQueryParams} params
 */
const cachedGraphQlQuery = unstable_cache(
  nonCachedGraphQlQuery,
  ['graphQlQuery'],
  process.env.NODE_ENV === 'development' ? { revalidate: 1 } : { tags: ['storyblok'] },
);

/**
 * @param {QraphQlQueryParams} params
 */
const graphQlQuery = (
  params: {
    body: {
      query: string;
      variables: {
        by_slugs: string;
        by_uuids: string;
        resolve_relations: string;
      };
    };
    version: string;
  },
  { unstableCache = true } = {},
) => {
  return (unstableCache ? cachedGraphQlQuery : nonCachedGraphQlQuery)(params);
};

/**
 * Fetch a Story using GraphQL API
 *
 * @async
 * @param {Object} params
 * @param {string[]|null} [params.bySlugs=null]
 * @param {string[]|null} [params.byUuids=null]
 * @param {string[]|null} [params.resolveRelations=null]
 * @param {StoryblokVersion} params.version
 * @param {Boolean} [params.unstableCache=false]
 * @return {Promise<object>} Story
 */
export const fetchStory = async ({
  bySlugs = null,
  byUuids = null,
  resolveRelations = null,
  version,
  unstableCache = false,
}: {
  bySlugs: string[] | null;
  byUuids: string[] | null;
  resolveRelations: string[] | null;
  version: string;
  unstableCache: boolean;
}) => {
  return graphQlQuery(
    {
      body: {
        query: /* graphql */ `
          query GetStory(
            $by_slugs: String,
            $by_uuids: String,
            $resolve_relations: String
          ) {
            ContentNodes(
              by_slugs: $by_slugs,
              by_uuids: $by_uuids,
              resolve_relations: $resolve_relations,
              per_page: 1,
            ) {
              items {
                ${ITEM_ROOT_FIELDS}
                content
              }
            }
          }
        `,
        variables: {
          by_slugs: bySlugs ? bySlugs.join(',').replace(/\/+/g, '/') : '',
          by_uuids: byUuids ? byUuids.join(',').replace(/\/+/g, '/') : '',
          resolve_relations: resolveRelations ? resolveRelations.join(',') : '',
        },
      },
      version,
    },
    {
      unstableCache,
    },
  ).then(result => {
    return result?.data?.ContentNodes?.items && result?.data?.ContentNodes?.items[0]
      ? result?.data?.ContentNodes?.items[0]
      : null;
  });
};

/**
 * @typedef {Object} FetchProjectsParams
 * @property {ContentType|null} [contentType=null]
 * @property {string|null} [startsWith=null]
 * @property {boolean|null} [isStartpage=null]
 * @property {Object|null} [filterQuery=null]
 * @property {Object|null} [filterQueryV2=null]
 * @property {string[]|null} [excludingFields=null]
 * @property {string|null} [sortBy=null]
 * @property {string[]|null} [resolveRelations=null]
 * @property {StoryblokVersion} [version=STORYBLOK_VERSION.PUBLISHED]
 * @property {number} [page=1]
 * @property {number} [perPage=25]
 * @property {number} [limit=Infinity]
 * @property {Boolean} unstableCache
 */

/**
 * Fetch Stories using GraphQL API
 *
 * @async
 * @param {FetchProjectsParams} params
 * @return {Promise<object>} Stories and total
 */
export const fetchProjectsPage = async ({
  startsWith = null,
  isStartpage = null,
  filterQuery = null,
  filterQueryV2 = null,
  excludingFields = null,
  sortBy = null,
  resolveRelations = null,
  version = STORYBLOK_VERSION.PUBLISHED,
  page = 1,
  perPage = 25,
  limit = Infinity,
  unstableCache = false,
}) => {
  const requestName = 'ProjectItems';

  const fields = `
    ${ITEM_ROOT_FIELDS}
    content {
      ${CONTENT_ROOT_FIELDS}
      title
      image {
        filename
        alt
      }
    }
  `;

  return graphQlQuery(
    {
      body: {
        query: /* graphql */ `
        query GetStories(
          $starts_with: String,
          $is_startpage: String,
          ${filterQuery ? `$filter_query: JsonScalar,` : ''}
          $excluding_fields: String,
          $sort_by: String,
          $resolve_relations: String,
          $page: Int,
          $per_page: Int,
        ) {
          ${requestName}(
            starts_with: $starts_with,
            is_startpage: $is_startpage,
            ${filterQuery ? 'filter_query: $filter_query,' : ''},
            ${filterQueryV2 ? `filter_query_v2: ${queryfy(filterQueryV2)},` : ''}
            excluding_fields: $excluding_fields,
            sort_by: $sort_by,
            resolve_relations: $resolve_relations,
            page: $page,
            per_page: $per_page,
          ) {
            items {
              ${fields}
            }
            total
          }
        }
      `,
        variables: {
          starts_with: startsWith,
          is_startpage: isStartpage === null ? '' : String(isStartpage),
          filter_query: filterQuery === null ? undefined : filterQuery,
          excluding_fields: excludingFields ? excludingFields.join(',') : '',
          sort_by: sortBy === null ? '' : sortBy,
          resolve_relations: resolveRelations ? resolveRelations.join(',') : '',
          page,
          per_page: perPage - Math.max(0, page * perPage - (limit || Infinity)),
        },
      },
      version,
    },
    {
      unstableCache,
    },
  ).then(result => {
    return {
      stories:
        result?.data && result?.data[requestName]?.items ? result?.data[requestName]?.items : [],
      total:
        result?.data && result?.data[requestName]?.total
          ? result?.data[requestName]?.total || 0
          : 0,
    };
  });
};
