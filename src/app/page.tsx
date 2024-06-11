'use client';
import HomeHero from '@/app/home/Partials/HomeHero';
import styled from 'styled-components';
import HomeLittleAbout from '@/app/home/Partials/HomeLittleAbout';
import HomeWorks from '@/app/home/Partials/HomeWorks';
import { WorkProvider } from '@/context/workContext';
import HomeTitleWorks from '@/app/home/Partials/HomeTitleWorks';

const ArticleContainer = styled.div`
  min-height: 100vh;
  background-color: transparent;
`;

export default function Home() {
  return (
    <>
      <ArticleContainer>
        <>
          <HomeHero />
          <HomeLittleAbout />
          <HomeTitleWorks />
          <WorkProvider>
            <HomeWorks />
          </WorkProvider>
        </>
      </ArticleContainer>
    </>
  );
}
