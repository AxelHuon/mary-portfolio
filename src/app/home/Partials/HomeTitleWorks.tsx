import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '@/theme/colors';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import TextStyled from '@/components/Atomes/TextStyled/TextStyled';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  height: 500vh;
  width: 100%;
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
  height: 100%;
  position: relative;
  z-index: 999;
  padding-inline: 10%;
  opacity: 0;
`;
const BoxOpacity = styled.div`
  opacity: 0;
  position: absolute;
  top: 400vh;
  height: 100vh;
`;
const HomeTitleWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const boxOpacityRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
        start: 'top +=400px',
        trigger: titleRef.current,
        scrub: true,
        pin: true,
      },
    });
    gsap.to(titleRef.current, {
      opacity: 1,
      scrollTrigger: {
        start: 'top 200px',
        end: 'top 0vh',
        trigger: boxRef.current,
        scrub: true,
      },
    });
    gsap.to(containerRef.current, {
      opacity: 0,
      scrollTrigger: {
        markers: true,
        trigger: boxOpacityRef.current,
        end: 'top +=80vh',
        scrub: true,
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
      <BoxOpacity ref={boxOpacityRef}></BoxOpacity>
    </Container>
  );
};

export default HomeTitleWorks;
