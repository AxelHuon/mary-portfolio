import React, { useEffect, useRef } from 'react';
import { ThreeCarousel } from '@/components/Organisms/ThreeCarousel/ThreeCarousel';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useWorkContext } from '@/context/workContext';

gsap.registerPlugin(ScrollTrigger);

const ContainerCarousel = styled.section`
  height: 500vh;
`;

const ContainerSection = styled.div`
  max-height: 500vh;
  height: 500vh;
`;

const HomeWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(sectionRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          pin: true,
          markers: true,
          trigger: sectionRef.current,
          scrub: true,
        },
      });
    },
    { scope: sectionRef },
  );

  const { currentWorkHover } = useWorkContext();

  useEffect(() => {
    console.log(currentWorkHover);
  }, [currentWorkHover]);

  return (
    <ContainerSection>
      <ContainerCarousel ref={sectionRef}>
        <ThreeCarousel />
      </ContainerCarousel>
    </ContainerSection>
  );
};

export default HomeWorks;
