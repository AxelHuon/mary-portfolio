import React from 'react';
import styled from 'styled-components';
import { Colors } from '@/theme/colors';

interface TextStyledProps {
  children: React.ReactNode;
  as: string;
  color?: string;
  spanColor?: string;
  fontSize: string;
  fontFamily: 'Nanum Pen';
  fontWeight?: number;
  lineHeight?: string;
}

const TextStyledStyle = styled.p<TextStyledProps>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight || 'normal'};
  span {
    ${props => props.spanColor}
  }
`;

const TextStyled: React.FC<TextStyledProps> = ({
  children,
  spanColor,
  color = Colors.BLACK,
  as,
  fontSize,
  fontWeight = 500,
  fontFamily,
  lineHeight,
}) => {
  const props = {
    children,
    spanColor,
    color,
    as,
    fontSize,
    fontWeight,
    fontFamily,
    lineHeight,
  };

  return <TextStyledStyle {...props}>{children}</TextStyledStyle>;
};

export default TextStyled;
