'use client';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Colors } from '@/theme/colors';

gsap.registerPlugin(ScrollSmoother, useGSAP);

const Main = styled.main`
  background-color: ${Colors.WHITE};
`;

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <Main className={'main_container'} style={{ overflow: 'hidden' }} id="smooth-wrapper">
        <article style={{ overflow: 'hidden' }} id="smooth-content">
          {children}
        </article>
      </Main>
    </>
  );
}
