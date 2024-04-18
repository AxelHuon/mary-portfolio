'use client';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { ReactNode } from 'react';

gsap.registerPlugin(ScrollSmoother);

export default function Template({ children }: { children: ReactNode }) {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
    });
  });

  return (
    <>
      {/*
      <Loader />
*/}
      <main style={{ overflow: 'hidden' }} id="smooth-wrapper">
        <article style={{ overflow: 'hidden' }} id="smooth-content">
          {children}
        </article>
      </main>
    </>
  );
}
