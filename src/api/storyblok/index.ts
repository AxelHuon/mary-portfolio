import { fetchProjectsPage, fetchStory } from './graphql';
import { ProjectPage, ProjectPreview } from './types/projects';
import { STORYBLOK_VERSION } from './version';

/**
 * @typedef {import('./version.js').StoryblokVersion} StoryblokVersion
 */

export { STORYBLOK_VERSION };

export const RESOLVE_RELATIONS = [];

/**
 * @param {Object} params
 * @param {string} params.slug
 * @param {Object} params.searchParams
 * @param {string} params.searchParams._storyblok
 * @returns {Promise<Object>} blok
 */
export const fetchProject = async (params: {
  slug: string;
  searchParams: { _storyblok: string };
}) => {
  const insideStoryblok = typeof params.searchParams?._storyblok !== 'undefined';

  const path = params?.slug;

  const story = await fetchStory({
    bySlugs: [`${path}`, `${path}/`],
    resolveRelations: RESOLVE_RELATIONS,
    version: insideStoryblok ? STORYBLOK_VERSION.DRAFT : process.env.STORYBLOK_VERSION,
    unstableCache: true,
  });

  return story;
};

/**
 * Fetch all Stories using GraphQL API
 *
 * @async
 * @param {FetchStoriesParams} params
 * @param {Object[]} [merge=[]]
 * @return {Promise<ProjectPreview[]>} Projects
 */
export const fetchProjects = async ({ page = 1, limit = Infinity, ...rest }, merge = []) => {
  const allStories: ProjectPage[] = merge.slice();

  const { stories, total }: { stories: ProjectPage[]; total: number } = await fetchProjectsPage({
    page,
    limit,
    ...rest,
  });

  allStories.push(...stories);

  if (allStories.length < Math.min(total, limit || Infinity)) {
    return fetchProjects(
      {
        page: page + 1,
        limit,
        ...rest,
      },
      allStories,
    );
  }

  return allStories.map(story => ({
    full_slug: story.full_slug,
    title: story?.content?.title,
    image: story?.content?.image,
  }));
};
