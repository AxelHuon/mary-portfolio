// pages/index.tsx
import React from 'react';
import ThreeCarousel from '@/components/Organisms/ThreeCarousel/ThreeCarousel';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';
import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';

import { Image, ScrollControls, useScroll, useTexture } from '@react-three/drei';

const Container = styled.div`
  padding-top: 100px;
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
`;

const HomeWorks: React.FC = () => {
  return (
    <SectionXL as={'aside'} $bgcolor={'transparent'}>
      <Container>
        <ThreeCarousel />
      </Container>
    </SectionXL>
  );
};

export default HomeWorks;
