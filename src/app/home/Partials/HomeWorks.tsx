import React from 'react';
import { ThreeCarousel } from '@/components/Organisms/ThreeCarousel/ThreeCarousel';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';
import styled from 'styled-components';
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  overflow: 'hidden';
`;

const HomeWorks: React.FC = () => {
  return (
    <SectionXL>
      <Container>
        <ThreeCarousel />
      </Container>
    </SectionXL>
  );
};

export default HomeWorks;
