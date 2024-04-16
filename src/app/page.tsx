'use client';
import HomeHero from '@/app/home/Partials/HomeHero';
import styled from 'styled-components';
import { useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Colors } from '@/theme/colors';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeLittleAbout from '@/app/home/Partials/HomeLittleAbout';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const ArticleContainer = styled.article`
  min-height: 100vh;
  background-color: ${Colors.WHITE};
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <>
      <ArticleContainer>
        {!isLoading && (
          <>
            <HomeHero />
            <HomeLittleAbout />
            <div style={{ height: '100vh' }}></div>
          </>
        )}
      </ArticleContainer>
    </>
  );
}
