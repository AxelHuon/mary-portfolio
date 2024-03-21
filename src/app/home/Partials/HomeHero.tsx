'use client';
import React from 'react';
import styled from 'styled-components';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';
import TextStyled from '@/components/Atomes/TextStyled/TextStyled';

const Container = styled.aside`
  height: 100vh;
  width: 100%;
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerTitleBR = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerTitleMBT = styled.div`
  display: flex;
  justify-content: flex-end;
  transform: translateX(-20px);
`;
const HomeHero: React.FC = () => {
  return (
    <SectionXL>
      <Container>
        <ContainerTitle>
          <ContainerTitleBR>
            <TextStyled as={'h2'} $lineHeight={'120px'} fontSize={'200px'} fontFamily={'Nanum Pen'}>
              BRAND DESIGNER
            </TextStyled>
          </ContainerTitleBR>
          <ContainerTitleMBT>
            <TextStyled as={'h1'} fontSize={'40px'} fontFamily={'Nanum Pen'}>
              MARY BONNANCY THOMAS
            </TextStyled>
          </ContainerTitleMBT>
        </ContainerTitle>
      </Container>
    </SectionXL>
  );
};

export default HomeHero;
