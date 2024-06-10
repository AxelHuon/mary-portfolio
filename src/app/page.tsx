'use client';
import HomeHero from '@/app/home/Partials/HomeHero';
import styled from 'styled-components';
import { useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeLittleAbout from '@/app/home/Partials/HomeLittleAbout';
import HomeWorks from '@/app/home/Partials/HomeWorks';
import Head from 'next/head';
import { WorkProvider } from '@/context/workContext';
import HomeTitleWorks from '@/app/home/Partials/HomeTitleWorks';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const ArticleContainer = styled.div`
  min-height: 100vh;
  background-color: transparent;
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

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
