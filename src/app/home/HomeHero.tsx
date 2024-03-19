'use client';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerImage = styled.div`
  width: 400px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HomeHero: React.FC = () => {
  const containerImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(containerImageRef.current, { width: '100%', duration: 1 });
  });

  return (
    <SectionXL>
      <Container>
        <ContainerImage ref={containerImageRef}>
          <Image src={'/images/gallery/mary.webp'} alt={'mary'} width={3140} height={2983} />
        </ContainerImage>
      </Container>
    </SectionXL>
  );
};

export default HomeHero;
