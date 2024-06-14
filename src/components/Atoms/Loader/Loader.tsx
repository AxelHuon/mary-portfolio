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
  z-index: 9999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.WHITE};
  pointer-events: none;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
`;

const LoaderWrapper = styled.div`
  width: 150%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 50px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
`;

const LoaderImageContainer = styled.div`
  position: relative;
  flex: 1;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LoaderLogo = styled.div`
  position: relative;
  flex: 1;

  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Loader: React.FC = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const loaderWrapperRef = useRef<HTMLDivElement | null>(null);
  const leftSideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightSideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const loaderContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initial state setup
    gsap.set(leftSideRefs.current, { y: 500 });
    gsap.set(rightSideRefs.current, { y: 500 });
    gsap.set(logoRef.current, { y: 500 });
    gsap.set(loaderWrapperRef.current, { x: 500 });

    const timeline = gsap.timeline({ delay: 1 });

    timeline
      .to(leftSideRefs.current, {
        y: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: 'power3.inOut',
      })
      .to(
        rightSideRefs.current,
        {
          y: 0,
          duration: 1.5,
          stagger: 0.05,
          ease: 'power3.inOut',
        },
        '-=1.5',
      )
      .to(
        logoRef.current,
        {
          y: 0,
          duration: 1.5,
          stagger: 0.05,
          ease: 'power3.inOut',
        },
        '-=1.5',
      )
      .to(
        loaderWrapperRef.current,
        {
          x: 0,
          duration: 3,
          ease: 'power3.inOut',
        },
        '-=2.5',
      )
      .to(
        leftSideRefs.current,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1,
          stagger: 0.1,
          ease: 'power3.inOut',
        },
        '-=1',
      )
      .to(
        rightSideRefs.current,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1,
          stagger: 0.1,
          ease: 'power3.inOut',
        },
        '-=1',
      )
      .to(
        loaderContainerRef.current,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1,
          ease: 'power3.inOut',
        },
        '-=0.5',
      );
  }, []);

  return (
    <LoaderContainer ref={loaderContainerRef}>
      <LoaderWrapper ref={loaderWrapperRef}>
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
