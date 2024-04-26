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
import Loader from '@/components/Atomes/Loader/Loader';

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
      <Head>
        <link rel="preload" href="/images/gallery/gallery1.webp" as="image" />
        <link rel="preload" href="/images/gallery/gallery2.webp" as="image" />
        <link rel="preload" href="/images/gallery/gallery3.webp" as="image" />
        <link rel="preload" href="/images/gallery/gallery4.webp" as="image" />
        <link rel="preload" href="/images/gallery/gallery5.webp" as="image" />
        <link rel="preload" href="/images/gallery/gallery6.webp" as="image" />
        <link rel="preload" href="/images/gallery/gallery7.webp" as="image" />
        <link rel="preload" href="/images/gallery/mary.webp" as="image" />
        <link rel="preload" href="/images/textures/blue-texture.webp" as="image" />
      </Head>
      <Loader />
      <ArticleContainer>
        {!isLoading && (
          <>
            <HomeHero />
            <HomeLittleAbout />
            <WorkProvider>
              <HomeWorks />
            </WorkProvider>
          </>
        )}
      </ArticleContainer>
    </>
  );
}
