import React, { useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import { Colors } from '@/theme/colors';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);
interface NavLinkProps {
  title: string;
  href: string;
}

interface NavLinkStyledProps {
  $isActive: boolean;
}

const ContainerNavLink = styled.div`
  height: 20px;
  overflow: hidden;
`;
const NavLinkStyled = styled(Link)<NavLinkStyledProps>`
  text-decoration: none;
  overflow: hidden;
  color: ${props => (props.$isActive ? Colors.PRIMARY : Colors.PRIMARY_300)};
  transition: color 0.15s ease-in-out;
  &:hover {
    color: ${Colors.PRIMARY};
  }
  p {
    font-family: 'Nanum Pen', serif;
    font-size: 25px;
    line-height: 20px;
    &:nth-child(2) {
      > div {
        div {
          transform: translateY(-20px);
        }
      }
    }
  }
  &:before {
    content: ${props => (props.$isActive ? 'dsqdsq' : 'none')};
  }
`;

const NavLink: React.FC<NavLinkProps> = ({ title, href }) => {
  const pathname = usePathname();
  const props = {
    title,
    href,
  };
  const navLinkRef = useRef<HTMLDivElement>(null);
  const firstTitleRef = useRef<HTMLParagraphElement>(null);
  const secondTitleRef = useRef<HTMLParagraphElement>(null);
  useGSAP(
    () => {
      const splitFirstTitle = new SplitText(firstTitleRef.current);
      const splitSecondTitle = new SplitText(secondTitleRef.current);

      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        splitFirstTitle.chars,
        { translateY: 0, duration: 0 },
        {
          duration: 0.3,
          translateY: 20,
          stagger: 0.1,
        },
      );
      tl.fromTo(
        splitSecondTitle.chars,
        { translateY: -20, duration: 0 },
        {
          duration: 0.3,
          translateY: 0,
          stagger: 0.1,
        },
        '-=0.5',
      );

      const onHoverNavLink = () => {
        if (!tl.isActive()) {
          tl.restart();
        }
      };
      if (navLinkRef.current) {
        navLinkRef.current.addEventListener('mouseenter', onHoverNavLink);
      }
      return () => {
        if (navLinkRef.current) {
          navLinkRef.current.removeEventListener('mouseover', onHoverNavLink);
        }
      };
    },
    { scope: navLinkRef },
  );

  const $isActive = pathname === href;
  return (
    <ContainerNavLink ref={navLinkRef}>
      <NavLinkStyled $isActive={$isActive} href={href}>
        <p ref={firstTitleRef}>{title}</p>
        <p ref={secondTitleRef}>{title}</p>
      </NavLinkStyled>
    </ContainerNavLink>
  );
};

export default NavLink;
