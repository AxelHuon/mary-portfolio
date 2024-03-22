import React from 'react';
import styled from 'styled-components';
import { Colors } from '@/theme/colors';
import { TextStyledTypes } from '@/components/Atomes/TextStyled/TextStyled.types';
import { baseTextStyle, TextTypesStyles } from '@/components/Atomes/TextStyled/TextStyled.styles';

export interface TextStyledProps {
  children: React.ReactNode;
  as: string;
  color?: string;
  type: TextStyledTypes;
  $spanColorOne?: string;
  $spanColorTwo?: string;
  $align?: 'left' | 'right' | 'center';
}

const TextStyledStyle = styled.p<TextStyledProps>`
  ${baseTextStyle}
  ${({ type }) => TextTypesStyles[type as TextStyledTypes] || ''}
`;

const TextStyled: React.FC<TextStyledProps> = ({
  children,
  $spanColorOne = Colors.PRIMARY,
  $spanColorTwo,
  color = Colors.BLACK,
  as,
  $align = 'left',
  type,
}) => {
  const props = {
    children,
    $spanColorOne,
    $spanColorTwo,
    color,
    as,
    type,
    $align,
  };

  return <TextStyledStyle {...props}>{children}</TextStyledStyle>;
};

export default TextStyled;
