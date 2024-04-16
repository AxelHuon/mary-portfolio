'use client';
import React, { useRef } from 'react';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import styled from 'styled-components';
import Image from 'next/image';
import TextStyled from '@/components/Atomes/TextStyled/TextStyled';
import { Colors } from '@/theme/colors';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText, CustomEase);

const Container = styled.div`
  padding-top: 100px;
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    z-index: 2;
  }
`;

const TextContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  left: 0;
  top: 50%;
  transform: translateY(-50%) rotate(-2deg);
  gap: 20px;
  z-index: 35;
  h1 {
    max-width: 1200px;
    div {
      transform: translateY(100px) rotate(4deg);
      opacity: 0;
    }
    > span:nth-child(2) {
      color: ${Colors.PRIMARY} !important;
    }
    > span:nth-child(5) {
      color: ${Colors.SECONDARY} !important;
    }
  }
  p {
    max-width: 800px;
    line-height: 24px;
  }
`;

const ContainerBackgroundImage = styled.div`
  position: absolute;
  left: -10%;
  top: 4%;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: scale(1.14);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContainerNoise = styled.div`
  position: absolute;
  left: -10%;
  top: 4%;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: scale(1.14);
  img {
    opacity: 0.15;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AllImagesContainer = styled.div`
  width: clamp(300px, 50vw, 500px);
  height: clamp(300px, 50vw, 500px);
  position: relative;
  transform: rotate(5deg);
  img {
    --clip: 0%;
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
  }
`;

const HomeHero: React.FC = () => {
  const ContainerTitleRef = useRef<HTMLDivElement>(null);
  const ContainerImagesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      CustomEase.create('custom', 'M0,0 C0.85,0 0.2,1 1,1');
      gsap.to('img', {
        clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
        duration: 1,
        ease: 'custom',
        stagger: 0.3,
      });
    },
    { scope: ContainerImagesRef },
  );

  useGSAP(
    () => {
      CustomEase.create('custom', 'M0,0 C0.85,0 0.2,1 1,1');
      const splitTitle = new SplitText('h1', { type: 'words' });

      gsap.to(splitTitle.words, {
        y: 0,
        rotate: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 2,
        ease: 'expo.out',
      });
    },
    { scope: ContainerTitleRef },
  );

  return (
    <SectionXL as={'aside'} $bgcolor={'transparent'}>
      <Container>
        <TextContainer ref={ContainerTitleRef}>
          <TextStyled $spanColorTwo={Colors.SECONDARY} as={'h1'} type={'LargeTitle'}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'am <span data-speed="clamp(0.9)">mary</span>, a{' '}
            <span data-speed="clamp(0.4)">Brand Designer</span>
          </TextStyled>
        </TextContainer>
        <ImageContainer ref={ContainerImagesRef}>
          <AllImagesContainer>
            <ContainerBackgroundImage>
              <Image
                src={'/images/textures/blue-texture.webp'}
                alt={'Blue Texture'}
                width={550}
                height={550}
              />
            </ContainerBackgroundImage>
            <Image
              data-speed="clamp(0.8)"
              src={'/images/gallery/mary.webp'}
              alt={'Mary Image'}
              width={550}
              height={550}
            />
          </AllImagesContainer>
        </ImageContainer>
      </Container>
    </SectionXL>
  );
};

export default HomeHero;
