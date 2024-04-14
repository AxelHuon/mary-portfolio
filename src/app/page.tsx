'use client';
import HomeHero from '@/app/home/Partials/HomeHero';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Colors } from '@/theme/colors';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeLittleAbout from '@/app/home/Partials/HomeLittleAbout';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const ArticleContainer = styled.article<{ isLoading: boolean }>`
  overflow: ${props => (props.isLoading ? 'hidden' : 'auto')};
  min-height: 100vh;
  background-color: ${Colors.WHITE};
`;

const BlueSquareContainer = styled.section`
  min-height: 100vh;
  position: relative;
  .background-blue {
    opacity: 0.1;
    position: absolute;
    width: 400px;
    height: 400px;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0%);
    background-color: ${Colors.PRIMARY_900};
    z-index: 0;
  }
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const blueSquareContainerRef = useRef<HTMLDivElement>(null);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  useGSAP(
    () => {
      let tlBackGround = gsap.timeline({
        scrollTrigger: {
          start: 'top 70%',
          end: 'top 20%',
          trigger: blueSquareContainerRef.current,
          scrub: true,
        },
      });
      tlBackGround.to('.background-blue', {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.PRIMARY,
        opacity: 1,
      });
    },
    { scope: blueSquareContainerRef },
  );

  return (
    <ArticleContainer isLoading={isLoading}>
      {/*
      <Loader />
*/}

      <HomeHero />
      <HomeLittleAbout />
      <BlueSquareContainer ref={blueSquareContainerRef}>
        <div className={'background-blue'}></div>
      </BlueSquareContainer>
    </ArticleContainer>
  );
}
