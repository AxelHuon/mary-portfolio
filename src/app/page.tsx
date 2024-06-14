'use client';
import HomeHero from '@/components/Templates/Home/HomeHero';
import styled from 'styled-components';
import HomeLittleAbout from '@/components/Templates/Home/HomeLittleAbout';
import HomeWorks from '@/components/Templates/Home/HomeWorks';
import { WorkProvider } from '@/context/WorkContext/WorkContext';
import HomeTitleWorks from '@/components/Templates/Home/HomeTitleWorks';
import useScrollToTopOnMount from '@/hooks/useScrollToTopOnMount/useScrollToTopOnMount';
import { fetchProjects } from '@/api/storyblok/index';

const ArticleContainer = styled.div`
  min-height: 100vh;
  background-color: transparent;
`;

export default async function Home() {
  useScrollToTopOnMount();

  const projects = await fetchProjects({
    limit: Infinity,
  });

  return (
    <>
      <ArticleContainer>
        <HomeHero />
        <HomeLittleAbout />
        <HomeTitleWorks />
        <HomeWorks projects={projects} />
      </ArticleContainer>
    </>
  );
}
