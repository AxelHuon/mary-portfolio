import { fetchStory } from './graphql';
import { STORYBLOK_VERSION } from './version';

/**
 * @typedef {import('./version.js').StoryblokVersion} StoryblokVersion
 */

export { STORYBLOK_VERSION };

export const RESOLVE_RELATIONS = [];

export const fetchProject = async (params: {
  slug: string;
  searchParams: { _storyblok: string };
}) => {
  const insideStoryblok = typeof params.searchParams?._storyblok !== 'undefined';

  const story = await fetchStoryblok(
    {
      path: params.slug,
    },
    insideStoryblok ? STORYBLOK_VERSION.DRAFT : null,
    true,
  );

  return story;
};

/**
 * @param {Object} route
 * @param {StoryblokVersion|null} [storyblokVersion=null]
 * @param {boolean} [unstableCache=false]
 * @returns {Promise<Object>} blok
 */
export const fetchStoryblok = async (
  route: { path: string },
  storyblokVersion = null,
  unstableCache = false,
) => {
  /**
   * @type {StoryblokVersion}
   */
  const version = storyblokVersion || process.env.STORYBLOK_VERSION;

  const story = await fetchStory({
    bySlugs: [`${route.path}`, `${route.path}/`],
    resolveRelations: RESOLVE_RELATIONS,
    version,
    unstableCache,
  });

  return story;
};
