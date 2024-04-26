import React, { useRef } from 'react';
import styled from 'styled-components';
import { Colors } from '@/theme/colors';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const Container = styled.div`
  height: 200vh;
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

const BoxOpacity = styled.div`
  opacity: 0;
  position: absolute;
  top: 80vh;
`;

const HomeTitleWorks: React.FC = () => {
  const ContainerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const boxOpacityRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(boxRef.current, {
      width: '100%',
      height: '100%',
      backgroundColor: Colors.PRIMARY,
      scrollTrigger: {
        markers: true,
        start: 'top 400px',
        end: 'top 0vh',
        trigger: boxRef.current,
        scrub: true,
      },
    });
    gsap.to(boxRef.current, {
      opacity: 0,
      scrollTrigger: {
        markers: false,
        trigger: boxOpacityRef.current,
        start: 'top top',
        end: '+=300px',
        scrub: true,
      },
    });
  }, {});
  return (
    <Container ref={ContainerRef}>
      <BoxAbsolute ref={boxRef}></BoxAbsolute>
      <BoxOpacity ref={boxOpacityRef}></BoxOpacity>
    </Container>
  );
};

export default HomeTitleWorks;
