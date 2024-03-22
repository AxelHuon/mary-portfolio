'use client';
import React from 'react';
import styled from 'styled-components';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';

gsap.registerPlugin(SplitText);

const Container = styled.aside`
  height: 100vh;
  width: 100%;
`;

const HomeHero: React.FC = () => {
  return (
    <SectionXL>
      <Container></Container>
    </SectionXL>
  );
};

export default HomeHero;
