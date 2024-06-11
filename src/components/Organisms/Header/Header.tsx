'use client';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import LogoMary from '@/components/Atomes/Icons/LogoMary';
import Link from 'next/link';
import ButtonMenu from '@/components/Atomes/ButtonMenu/ButtonMenu';
import Menu from '@/components/Atomes/Menu/Menu';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase, useGSAP);
const HeaderContainer = styled.header`
  padding-block: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;
const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 99;
  position: relative;
  max-width: 90%;
`;

const Header: React.FC = () => {
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: headerContainerRef }); // we can just pass in a config object as the 1st parameter to make scoping simple
  const [timeLineMenu, setTimeLineMenu] = useState<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    CustomEase.create('custom', 'M0,0 C0.85,0 0.2,1 1,1');
    const timelineMenu = gsap.timeline({ paused: true });
    setTimeLineMenu(timelineMenu);
  });

  const openMenu = contextSafe(() => {
    if (timeLineMenu) {
      if (timeLineMenu.progress() == 0) {
        timeLineMenu.play();
      } else if (timeLineMenu.progress() === 1) {
        timeLineMenu.reverse(0);
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
          <ButtonMenu timeline={timeLineMenu} onClick={openMenu} />
        </NavigationContainer>
      </HeaderContainer>
      <Menu timeline={timeLineMenu} />
    </>
  );
};

export default Header;
