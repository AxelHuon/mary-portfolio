'use client';
import React from 'react';
import styled from 'styled-components';
import { Colors } from '@/theme/colors';

interface ButtonMenuProps {
  onClick: () => void;
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
    &.bg__button__bar__one {
      position: absolute;
      top: 0;
      left: 0;
    }
    &.bg__button__bar__two {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

const ButtonMenu: React.FC<ButtonMenuProps> = ({ onClick }) => {
  return (
    <BgButton onClick={onClick}>
      <div className={'bg__button__bar__one'}></div>
      <div className={'bg__button__bar__two'}></div>
    </BgButton>
  );
};

export default ButtonMenu;
