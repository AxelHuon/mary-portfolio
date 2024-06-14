'use client';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '@/utils/Theme/colors';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import TextStyled from '@/components/Atoms/TextStyled/TextStyled';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
  width: 100%;
  height: 100vh !important;
  position: relative;
`;
const BoxAbsolute = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${Colors.PRIMARY_900};
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 999;
  transform: translateX(-50%);
`;

const ContainerText = styled.div`
  height: 100vh;
  position: relative;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 10%;
  h3 div {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const BoxOpacity = styled.div`
  opacity: 0;
  position: absolute;
  top: 100vh;
  height: 100vh;
`;

const HomeTitleWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const boxOpacityRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText('h3', { type: 'words' });
    gsap.to(boxRef.current, {
      width: '100%',
      height: '100%',
      backgroundColor: Colors.PRIMARY,
      scrollTrigger: {
        start: 'top 400px',
        end: 'top 0vh',
        trigger: boxRef.current,
        scrub: true,
      },
    });
    gsap.to(titleRef.current, {
      scrollTrigger: {
        start: 'top top',
        end: 'bottom 0%',
        trigger: containerRef.current,
        scrub: true,
        pin: true,
      },
    });
    gsap.to(splitTitle.words, {
      opacity: 1,
      stagger: 0.2,
      y: 0,
      scrollTrigger: {
        start: 'top +=200px',
        trigger: containerRef.current,
        scrub: true,
      },
    });
    gsap.to(containerRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'bottom 10%',
        end: 'bottom 0%',
        scrub: true,
        pin: true,
      },
    });
  }, {});
  return (
    <Container ref={containerRef}>
      <BoxAbsolute ref={boxRef}></BoxAbsolute>
      <ContainerText ref={titleRef}>
        <TextStyled $align={'center'} as={'h3'} type={'LittleTitle'} color={Colors.WHITE}>
          Passionate about brand design and photography, I capture every moment with creativity and
          emotion.
        </TextStyled>
      </ContainerText>
      <BoxOpacity ref={boxOpacityRef} />
    </Container>
  );
};

export default HomeTitleWorks;
