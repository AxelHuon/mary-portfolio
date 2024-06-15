import { ProjectPage, ProjectContent } from '@/api/storyblok/types/projects';

import Project from './project';
import { fetchProject } from '@/api/storyblok/index';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: {
    slug: string;
    searchParams: { _storyblok: string };
  };
}) {
  const project: ProjectPage = await fetchProject(params);

  if (!project || project?.slug === '404') {
    return notFound();
  }

  const content: ProjectContent = project?.content;

  return <Project content={content} />;
}
