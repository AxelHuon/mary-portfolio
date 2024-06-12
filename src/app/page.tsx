'use client';
import HomeHero from '@/components/Templates/Home/HomeHero';
import styled from 'styled-components';
import HomeLittleAbout from '@/components/Templates/Home/HomeLittleAbout';
import HomeWorks from '@/components/Templates/Home/HomeWorks';
import { WorkProvider } from '@/context/WorkContext/WorkContext';
import HomeTitleWorks from '@/components/Templates/Home/HomeTitleWorks';

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
