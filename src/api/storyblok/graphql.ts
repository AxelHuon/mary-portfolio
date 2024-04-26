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

export const queryfy = (object, {} = {}) => {
  if (typeof object === 'number') {
    return object;
  }

  if (typeof object !== 'object' || Array.isArray(object)) {
    return JSON.stringify(object);
  }

  let props = Object.keys(object)
    .map(key => {
      return `${key}:${queryfy(object[key])}`;
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
const nonCachedGraphQlQuery = ({ body, version = STORYBLOK_VERSION.PUBLISHED }) => {
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
const graphQlQuery = (params, { unstableCache = true } = {}) => {
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
