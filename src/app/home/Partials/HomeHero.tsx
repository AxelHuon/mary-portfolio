'use client';
import React from 'react';
import styled from 'styled-components';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeHero: React.FC = () => {
  return (
    <SectionXL>
      <Container></Container>
    </SectionXL>
  );
};

export default HomeHero;
