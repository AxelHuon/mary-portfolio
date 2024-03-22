'use client';
import React, { useRef } from 'react';
import styled from 'styled-components';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import TextStyled from '@/components/Atomes/TextStyled/TextStyled';
import Image from 'next/image';
import { Colors } from '@/theme/colors';
import { useGSAP } from '@gsap/react';
import { CustomEase } from 'gsap/CustomEase';
import ButtonLink from '@/components/Atomes/Buttons/ButtonLink/ButtonLink';

gsap.registerPlugin(SplitText, CustomEase);

const Container = styled.aside`
  max-height: 100vh;
  width: 100%;
  padding-top: 150px;
  display: flex;
  gap: 20px;
  h1 {
    transform: rotate(-2deg);
  }
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
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

const ContainerImage = styled.div`
  width: 650px;
  height: 650px;
  position: absolute;
  right: 5%;
  top: 20%;
  transform: rotate(-2deg);
  background-image: url('/images/textures/blue-texture.webp');
  background-size: contain;
  &:after {
    opacity: 0.1;
    content: '';
    background-size: contain;
    background-image: url('/images/textures/noise.gif');
    position: absolute;
    z-index: 20;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    z-index: 30;
    height: auto;
  }
`;
export const BlueBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  background-color: ${Colors.PRIMARY};
`;

const HomeHero: React.FC = () => {
  const ContainerTitleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      CustomEase.create('custom', 'M0,0 C0.85,0 0.2,1 1,1');
      const splitTitle = new SplitText('h1', { type: 'words' });
      setTimeout(() => {
        gsap.to(splitTitle.words, {
          y: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 2,
          ease: 'expo.out',
        });
      }, 3300);
    },
    { scope: ContainerTitleRef },
  );

  return (
    <SectionXL $bgcolor={'transparent'}>
      <Container>
        <ContainerText ref={ContainerTitleRef}>
          <TextStyled $spanColorTwo={Colors.SECONDARY} as={'h1'} type={'LargeTitle'}>
            I’AM <span>MARY</span>, A <span>BRAND DESIGNER</span>
          </TextStyled>
          <TextStyled as={'p'} type={'BodyRegular'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
            vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </TextStyled>
          <ButtonLink href={'/projects'} color={Colors.WHITE} backgroundColor={Colors.PRIMARY}>
            Start a Project
          </ButtonLink>
        </ContainerText>
        <ContainerImage>
          <Image src={'/images/gallery/mary.webp'} alt={'mary'} width={618} height={618} />
        </ContainerImage>
      </Container>
    </SectionXL>
  );
};

export default HomeHero;
