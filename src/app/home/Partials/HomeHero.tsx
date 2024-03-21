'use client';
import React, { useRef } from 'react';
import styled from 'styled-components';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';
import TextStyled from '@/components/Atomes/TextStyled/TextStyled';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import { Colors } from '@/theme/colors';

gsap.registerPlugin(SplitText);
const Container = styled.aside`
  height: 100vh;
  width: 100%;
`;
const ContainerTitle = styled.div`
  display: flex;
  padding-top: 150px;
  flex-direction: column;
`;
const ContainerTitleBR = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0;
  h2 {
    div {
      opacity: 0;
      transform: translateY(100px);
    }
  }
`;
const ContainerTitleMBT = styled.div`
  display: flex;
  justify-content: flex-end;
  transform: translateX(-20px);
  opacity: 0;
`;
const HomeHero: React.FC = () => {
  const TitleBrandDesignRef = useRef<HTMLDivElement>(null);
  const ContainerMaryImageRef = useRef<HTMLDivElement>(null);

  /*Animation Image*/
  useGSAP(
    () => {
      gsap.to(ContainerMaryImageRef.current, {
        duration: 2,
        delay: 2,
        width: '90%',
        top: '65%',
        height: '508px',
      });
    },
    { scope: ContainerMaryImageRef },
  );

  /*Animation Text*/
  useGSAP(
    () => {
      const designBrandSplitText = new SplitText('h2', {
        type: 'chars',
      });
      gsap.to(TitleBrandDesignRef.current, {
        duration: 0,
        delay: 0.1,
        opacity: 1,
      });
      gsap.to(designBrandSplitText.chars, {
        duration: 0.6,
        y: 0,
        delay: 2,
        opacity: 1,
        stagger: 0.05,
        ease: 'power.inOut',
      });
    },
    { scope: TitleBrandDesignRef },
  );

  return (
    <SectionXL>
      <Container>
        <ContainerTitle>
          <ContainerTitleBR ref={TitleBrandDesignRef}>
            <TextStyled as={'h2'} $lineHeight={'120px'} fontSize={'200px'} fontFamily={'Nanum Pen'}>
              BRAND DESIGNER
            </TextStyled>
          </ContainerTitleBR>
          <ContainerTitleMBT>
            <TextStyled color={Colors.PRIMARY} as={'h1'} fontSize={'40px'} fontFamily={'Nanum Pen'}>
              MARY BONNANCY THOMAS
            </TextStyled>
          </ContainerTitleMBT>
        </ContainerTitle>
      </Container>
    </SectionXL>
  );
};

export default HomeHero;
