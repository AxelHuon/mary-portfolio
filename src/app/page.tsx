'use client';
import HomeHero from '@/app/home/Partials/HomeHero';
import Loader from '../components/Atomes/Loader/Loader';
import styled from 'styled-components';
import { useState } from 'react';

const MainContainer = styled.main<{ isLoading: boolean }>`
  overflow: ${props => (props.isLoading ? 'hidden' : 'auto')};
  height: 100vh;
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <MainContainer isLoading={isLoading}>
      <Loader />
      <HomeHero />
    </MainContainer>
  );
}
