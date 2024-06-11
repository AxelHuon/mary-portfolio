'use client';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';
import { Colors } from '@/theme/colors';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollContextProps {
  scroll: ScrollSmoother | null;
}

const Main = styled.main`
  background-color: ${Colors.WHITE};
`;

const ScrollContext = createContext<ScrollContextProps>({ scroll: null });

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [scroll, setScroll] = useState<ScrollSmoother | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
      let scrollInstance: ScrollSmoother | null = null;
      scrollInstance = ScrollSmoother.create({
        smooth: 1,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
      });
      setScroll(scrollInstance);
    },
    {
      dependencies: [pathname, router],
      revertOnUpdate: true,
    },
  );

  return <ScrollContext.Provider value={{ scroll }}>{children}</ScrollContext.Provider>;
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
