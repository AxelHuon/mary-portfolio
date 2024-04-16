'use client';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import LogoMary from '@/components/Atomes/Icons/LogoMary';
import Link from 'next/link';
import ButtonMenu from '@/components/Atomes/ButtonMenu/ButtonMenu';
import Menu from '@/components/Atomes/Menu/Menu';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { device } from '@/utils/breakpoint';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase, useGSAP);
const HeaderContainer = styled.header`
  padding-block: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20000;
`;
const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 99;
  position: relative;
  max-width: 90%;
  @media (${device.laptopM}) {
    max-width: 1150px;
  }
  @media (${device.laptopL}) {
    max-width: 1300px;
  }
  @media (${device.desktopM}) {
    max-width: 1550px;
  }
  @media (${device.desktopL}) {
    max-width: 1700px;
  }
`;

const Header: React.FC = () => {
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: headerContainerRef }); // we can just pass in a config object as the 1st parameter to make scoping simple
  const [timeLineState, setTimeLineState] = useState<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    CustomEase.create('custom', 'M0,0 C0.85,0 0.2,1 1,1');
    const timeline = gsap.timeline({ paused: true });
    timeline.to('.bg__button__bar__one', {
      top: '50%',
      rotate: -45,
      ease: 'custom',
      duration: 0.5,
    });
    timeline.to(
      '.bg__button__bar__two',
      { top: '50%', rotate: 45, ease: 'custom', duration: 0.3 },
      '>-0.5',
    );
    timeline.to('.menu', { top: 0, ease: 'custom', duration: 1.4 }, '>-0.3');
    timeline.fromTo(
      '.menu li',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, ease: 'expo.out', duration: 1, stagger: 0.2 },
      '>-0.3',
    );
    timeline.to(
      '.menu__image__one',
      {
        clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
        ease: 'custom',
        duration: 0.7,
      },
      '>-1.5',
    );
    timeline.to(
      '.menu__image__two',
      {
        clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
        ease: 'custom',
        duration: 0.7,
      },
      '>-0.2',
    );
    timeline.fromTo(
      '.container__about div',
      {
        y: 30,
        opacity: 0,
      },
      { opacity: 1, y: 0, ease: 'expo.out', duration: 0.8, stagger: 0.1 },
      '>-0.7',
    );
    setTimeLineState(timeline);
  });

  const openMenu = contextSafe(() => {
    if (timeLineState) {
      if (timeLineState.progress() === 0) {
        timeLineState.play();
      } else if (timeLineState.progress() === 1) {
        timeLineState.reverse(0);
      }
    }
  });

  return (
    <>
      <HeaderContainer ref={headerContainerRef}>
        <NavigationContainer>
          <Link href={'/'}>
            <LogoMary width={'61'} height={'39'} />
          </Link>
          <ButtonMenu onClick={openMenu} />
        </NavigationContainer>
        <Menu />
      </HeaderContainer>
    </>
  );
};

export default Header;
