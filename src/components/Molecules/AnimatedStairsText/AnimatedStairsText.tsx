import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';
import { TextTypesStyles } from '@/components/Atoms/TextStyled/TextStyled.styles';
import { Colors } from '@/utils/Theme/colors';

gsap.registerPlugin(SplitText, CustomEase);

interface AnimatedStairTextProps {
  title: string;
}

interface NavLinkStyledProps {
  $heightText: number;
}

const ContainerNavLink = styled.div<{ $heightText: number }>`
  height: ${props => props.$heightText}px;
  overflow: hidden;
  overflow: hidden;
  cursor: pointer;
  color: ${Colors.PRIMARY};
  transition: color 0.15s ease-in-out;

  p {
    ${TextTypesStyles.LittleTitle}
    &:nth-child(2) {
      > div {
        div {
          transform: translateY(-${props => props.$heightText}px);
        }
      }
    }
  }
`;

const AnimatedStairsText: React.FC<AnimatedStairTextProps> = ({ title }) => {
  const pathname = usePathname();

  const navLinkRef = useRef<HTMLDivElement>(null);
  const firstTitleRef = useRef<HTMLParagraphElement>(null);
  const secondTitleRef = useRef<HTMLParagraphElement>(null);
  const [heightText, setHeightText] = useState<number>(
    firstTitleRef?.current?.getBoundingClientRect()?.height ?? 100,
  );

  useEffect(() => {
    if (firstTitleRef) {
      setHeightText(firstTitleRef?.current?.getBoundingClientRect()?.height ?? 100);
    }
  }, [firstTitleRef?.current?.getBoundingClientRect()?.height]);

  const setHeightOnResize = () => {
    setHeightText(
      firstTitleRef && firstTitleRef.current
        ? firstTitleRef.current.getBoundingClientRect().height
        : 100,
    );
  };

  useEffect(() => {
    window.addEventListener('resize', setHeightOnResize);
    return () => window.removeEventListener('resize', setHeightOnResize);
  }, []);

  useGSAP(
    () => {
      const splitFirstTitle = new SplitText(firstTitleRef.current);
      const splitSecondTitle = new SplitText(secondTitleRef.current);
      CustomEase.create('custom', 'M0,0 C0.85,0 0.2,1 1,1');

      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        splitFirstTitle.chars,
        { translateY: 0, duration: 0 },
        {
          duration: 0.3,
          translateY: heightText,
          stagger: 0.1,
          ease: 'custom',
        },
      );
      tl.fromTo(
        splitSecondTitle.chars,
        { translateY: -100, duration: 0 },
        {
          duration: 0.3,
          translateY: 0,
          stagger: 0.1,
          ease: 'custom',
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

  return (
    <ContainerNavLink $heightText={heightText} ref={navLinkRef}>
      <p ref={firstTitleRef}>{title}</p>
      <p ref={secondTitleRef}>{title}</p>
    </ContainerNavLink>
  );
};

export default AnimatedStairsText;
