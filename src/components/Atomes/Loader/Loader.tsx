'use client';
import { useRef } from 'react';
import styled from 'styled-components';
import { Colors } from '@/theme/colors';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(CustomEase);

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  height: 100vh;
  position: fixed;
  width: 100%;
  background-color: ${Colors.WHITE};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: url('/images/textures/noise.gif');
    background-size: contain;
    opacity: 0.05;
  }
`;

const Loader = () => {
  const LoaderContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    CustomEase.create('custom', 'M0,0 C0.85,0 0.2,1 1,1');
    setTimeout(() => {
      gsap.to(LoaderContainerRef.current, {
        duration: 1,
        translateY: '-100%',
        ease: 'custom',
      });
    }, 3000);
  });

  useGSAP(
    () => {
      gsap.set('#svg path', { drawSVG: 0 });
      gsap.to('#svg path', { drawSVG: 1 });
    },
    { scope: LoaderContainerRef },
  );

  return <LoaderContainer ref={LoaderContainerRef}></LoaderContainer>;
};

export default Loader;
