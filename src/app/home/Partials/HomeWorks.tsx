import React, { useRef } from 'react';
import { ThreeCarousel } from '@/components/Organisms/ThreeCarousel/ThreeCarousel';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useWorkContext } from '@/context/workContext';
import { Works } from '@/data/works';

gsap.registerPlugin(ScrollTrigger);

const ContainerCarousel = styled.section`
  height: 500vh;
  position: relative;
`;

const ContainerSection = styled.div<{ currentWorkHover: Works | null }>`
  max-height: 500vh;
  height: 500vh;
  transition: 0.2s background-color ease-in;
`;

const HomeWorks: React.FC = () => {
  const { currentWorkHover } = useWorkContext();
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionRefGlobal = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(sectionRef.current, { opacity: 0 });
      gsap.to(sectionRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          markers: true,
          start: 'top 50%',
          end: 'top 0%',
          trigger: sectionRef.current,
          scrub: true,
        },
      });
      gsap.to(sectionRef.current, {
        duration: 1,
        scrollTrigger: {
          pin: true,
          trigger: sectionRef.current,
          scrub: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <ContainerSection currentWorkHover={currentWorkHover} ref={sectionRefGlobal}>
      <ContainerCarousel ref={sectionRef}>
        <ThreeCarousel />
      </ContainerCarousel>
    </ContainerSection>
  );
};

export default HomeWorks;
