import React, { useRef } from 'react';
import { ThreeCarousel } from '@/components/Organisms/ThreeCarousel/ThreeCarousel';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WorkProvider } from '@/context/WorkContext/WorkContext';

gsap.registerPlugin(ScrollTrigger);

const ContainerCarousel = styled.section`
  height: 500vh;
  position: relative;
`;

const ContainerSection = styled.div`
  max-height: 500vh;
  height: 500vh;
`;

const HomeWorks: React.FC = ({ projects }: { projects: ProjectPreview[] }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(sectionRef.current, { opacity: 0 });
      gsap.to(sectionRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          start: 'top 80%',
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
    <WorkProvider>
      <ContainerSection id={'works'}>
        <ContainerCarousel ref={sectionRef}>
          <ThreeCarousel projects={projects} />
        </ContainerCarousel>
      </ContainerSection>
    </WorkProvider>
  );
};

export default HomeWorks;
