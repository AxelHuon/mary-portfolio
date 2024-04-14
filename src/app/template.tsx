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
    });
  });

  return (
    <main id="smooth-wrapper">
      <article id="smooth-content">{children}</article>
    </main>
  );
}
