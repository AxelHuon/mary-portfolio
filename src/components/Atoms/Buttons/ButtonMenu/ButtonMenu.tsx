'use client';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Colors } from '@/utils/Theme/colors';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

interface ButtonMenuProps {
  onClick: () => void;
  timeline: gsap.core.Timeline | null;
}

const BgButton = styled.button`
  display: flex;
  height: 11px;
  justify-content: space-between;
  flex-direction: column;
  border: none;
  background-color: transparent;
  width: 47px;
  position: relative;
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }

  div {
    width: 100%;
    height: 2px;
    background-color: ${Colors.PRIMARY};

    &:first-child {
      position: absolute;
      top: 0;
      left: 0;
    }

    &:last-child {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

const ButtonMenu: React.FC<ButtonMenuProps> = ({ onClick, timeline }) => {
  const barBtnOne = useRef<HTMLDivElement>(null);
  const barBtnTwo = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    timeline &&
      timeline.to(barBtnOne.current, {
        top: '50%',
        width: '70%',
        rotate: -45,
        ease: 'custom',
        duration: 0.5,
      });
    timeline &&
      timeline.to(
        barBtnTwo.current,
        { top: '50%', width: '70%', rotate: 45, ease: 'custom', duration: 0.3 },
        '>-0.5',
      );
  }, [timeline]);

  return (
    <BgButton onClick={onClick}>
      <div ref={barBtnOne}></div>
      <div ref={barBtnTwo}></div>
    </BgButton>
  );
};

export default ButtonMenu;
