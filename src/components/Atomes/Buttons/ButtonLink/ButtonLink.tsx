'use client';
import React from 'react';
import Link from 'next/link';
import { StyledButton } from './ButtonLink.style';
import TextStyled from '@/components/Atomes/TextStyled/TextStyled';

export type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
  isNextLink?: boolean;
  backgroundColor?: string;
  color?: string;
};

const ButtonLink: React.FC<ButtonProps> = ({
  onClick,
  children,
  href,
  isNextLink = true,
  backgroundColor,
  color,
}) => {
  const props = {
    onClick,
    children,
    href,
    isNextLink,
    backgroundColor,
    color,
  };
  if (isNextLink && href) {
    return (
      <StyledButton {...props}>
        <Link href={href} passHref>
          {children}
        </Link>
      </StyledButton>
    );
  }

  return <StyledButton {...props}>{children}</StyledButton>;
};

export default ButtonLink;
