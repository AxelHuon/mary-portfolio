'use client';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import LogoMary from '@/components/Atoms/Icons/LogoMary/LogoMary';
import { Colors } from '@/utils/Theme/colors';
import Image from 'next/image';

const images = [
  '/images/gallery/gallery1.webp',
  '/images/gallery/gallery2.webp',
  '/images/gallery/gallery3.webp',
  '/images/gallery/gallery4.webp',
  '/images/gallery/gallery5.webp',
  '/images/gallery/gallery6.webp',
];

const LoaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: ${Colors.WHITE};
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderImageContainer = styled.div`
  width: 100%;
  max-width: 250px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LoaderLogo = styled.div`
  width: 100%;
  max-width: 250px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Loader: React.FC = () => {
  const leftSideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightSideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const allElements = [...leftSideRefs.current, logoRef.current, ...rightSideRefs.current].filter(
      Boolean,
    ) as HTMLDivElement[];

    gsap.fromTo(
      allElements,
      { y: 300, opacity: 1 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(
            [...leftSideRefs.current, ...rightSideRefs.current].filter(Boolean) as HTMLDivElement[],
            {
              y: -300,
              opacity: 1,
              duration: 0.4,
              ease: 'power2.in',
              delay: 0.1,
            },
          );
        },
      },
    );
  }, []);

  return (
    <LoaderContainer>
      <LoaderWrapper>
        {images.slice(0, 3).map((image, index) => (
          <LoaderImageContainer key={index} ref={el => (leftSideRefs.current[index] = el)}>
            <Image src={image} alt="gallery" width={250} height={300} />
          </LoaderImageContainer>
        ))}
        <LoaderLogo ref={logoRef}>
          <LogoMary />
        </LoaderLogo>
        {images.slice(3, 6).map((image, index) => (
          <LoaderImageContainer key={index} ref={el => (rightSideRefs.current[index] = el)}>
            <Image src={image} alt="gallery" width={250} height={300} />
          </LoaderImageContainer>
        ))}
      </LoaderWrapper>
    </LoaderContainer>
  );
};

export default Loader;
