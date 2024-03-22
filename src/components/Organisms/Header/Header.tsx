'use client';
import React from 'react';
import styled from 'styled-components';
import LogoMary from '@/components/Atomes/Icons/LogoMary';
import Link from 'next/link';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';
import NavLink from '@/components/Atomes/NavLink/NavLink';

const HeaderContainer = styled.header`
  padding-block: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;
const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SectionXL $bgcolor={'transparent'} as={'div'}>
        <NavigationContainer>
          <Link href={'/'}>
            <LogoMary width={'61'} height={'39'} />
          </Link>
          <aside>
            <ListContainer>
              <li>
                <NavLink title={'Home'} href={'/'} />
              </li>
              <li>
                <NavLink title={'Work'} href={'/about'} />
              </li>
              <li>
                <NavLink title={'About'} href={'/works'} />
              </li>
              <li>
                <NavLink title={'Contact'} href={'/contact'} />
              </li>
            </ListContainer>
          </aside>
        </NavigationContainer>
      </SectionXL>
    </HeaderContainer>
  );
};

export default Header;
