'use client';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Colors } from '@/theme/colors';
import Image from 'next/image';
import TextStyled from '@/components/Atomes/TextStyled/TextStyled';
import NavLink from '@/components/Atomes/NavLink/NavLink';
import { TextTypesStyles } from '@/components/Atomes/TextStyled/TextStyled.styles';
import { device } from '@/utils/breakpoint';

gsap.registerPlugin(useGSAP);

interface MenuProps {
  timeline: gsap.core.Timeline | null;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: fixed;
  background-color: ${Colors.WHITE};
  top: 0;
  align-items: center;
  left: 0;
  opacity: 0;
  display: flex;
  z-index: -1;
  -webkit-box-shadow: 0px 21px 23px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 21px 23px 0px rgba(0, 0, 0, 0.03);
`;

const ContainerImage = styled.div`
  width: 40%;
  height: 100%;
  display: none;
  flex-direction: column;
  @media (${device.laptop}) {
    display: flex;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 50%;
    &.menu__image__one {
      clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
    }
    &.menu__image__two {
      clip-path: polygon(100% 0, 100% 100%, 100% 100%, 100% 0);
    }
  }
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  padding-block: 70px;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 40px;
  @media (${device.laptop}) {
    width: 60%;
  }
  @media (max-width: ${device.laptopL}) {
    padding: 100px;
  }
`;

const ContainerListLinks = styled.ul`
  display: flex;
  padding-top: 120px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 50px;
`;

const ContainerTextAbout = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media (${device.mobileXL}) {
    flex-direction: row;
    align-items: flex-end;
    gap: 50px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const NavLinkItem = styled.li<{ index: number }>`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.index % 2 ? `row` : `row-reverse`)};
  gap: 30px;
  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${props => (props.index % 2 ? `row` : `row-reverse`)};
    gap: 30px;
    p {
      text-align: center;
      @media (max-width: ${device.mobileXL}) {
        text-align: left;
      }
      ${TextTypesStyles.CalloutEmphasized}
      color:${Colors.PRIMARY}
    }
  }
`;

const Menu: React.FC<MenuProps> = ({ timeline }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    timeline && timeline.to(containerRef.current, { zIndex: '99', duration: 0 });
    timeline &&
      timeline.to(containerRef.current, { opacity: 1, ease: 'custom', duration: 1.4 }, '>-0.3');
    timeline &&
      timeline.fromTo(
        '.menu li',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, ease: 'expo.out', duration: 1, stagger: 0.2 },
        '>-0.3',
      );
    timeline &&
      timeline.to(
        '.menu__image__one',
        {
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
          ease: 'custom',
          duration: 0.7,
        },
        '>-1.5',
      );
    timeline &&
      timeline.to(
        '.menu__image__two',
        {
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
          ease: 'custom',
          duration: 0.7,
        },
        '>-0.2',
      );
    timeline &&
      timeline.fromTo(
        '.container__about div',
        {
          y: 30,
          opacity: 0,
        },
        { opacity: 1, y: 0, ease: 'expo.out', duration: 0.8, stagger: 0.1 },
        '>-0.7',
      );
  }, [timeline]);

  const linkItems = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/',
    },
    {
      title: 'Works',
      href: '/',
    },
    {
      title: 'Contact',
      href: '/',
    },
  ];

  return (
    <Container className={'menu'} ref={containerRef}>
      <ContainerImage className={'menu__image'}>
        <Image
          className={'menu__image__one'}
          src={'/images/gallery/gallery7.webp'}
          width={793}
          height={539}
          alt={'item'}
        />
        <Image
          className={'menu__image__two'}
          src={'/images/gallery/gallery8.webp'}
          width={793}
          height={539}
          alt={'item2'}
        />
      </ContainerImage>
      <ContainerText>
        <ContainerListLinks>
          {linkItems.map((item, i) => (
            <NavLinkItem index={i + 1} key={i}>
              <div>
                <p>0{i + 1}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  fill="none"
                  viewBox="0 0 7 8"
                >
                  <path
                    fill="#2E6FB8"
                    d="M.17 4.05c0-.9.14-1.62.42-2.16.3-.56.7-.96 1.2-1.2A4.03 4.03 0 013.5.33c.62 0 1.18.12 1.68.36s.9.64 1.2 1.2c.3.54.45 1.26.45 2.16 0 .88-.15 1.6-.45 2.16-.3.54-.7.94-1.2 1.2-.5.24-1.06.36-1.68.36-.62 0-1.19-.12-1.71-.36-.5-.26-.9-.66-1.2-1.2C.31 5.65.17 4.93.17 4.05z"
                  ></path>
                </svg>
              </div>
              <NavLink title={item.title} href={item.href} />
            </NavLinkItem>
          ))}
        </ContainerListLinks>
        <ContainerTextAbout className={'container__about'}>
          <div>
            <TextStyled as={'p'} type={'BodyRegular'}>
              +33 6 43 03 40 60
            </TextStyled>
            <TextStyled as={'p'} type={'BodyRegular'}>
              mary.bt@hotmail.fr
            </TextStyled>
          </div>
          <div>
            <TextStyled as={'p'} type={'BodyRegular'}>
              All rights reserved © Mary Bonnancy Thomas
            </TextStyled>
          </div>
        </ContainerTextAbout>
      </ContainerText>
    </Container>
  );
};

export default Menu;
