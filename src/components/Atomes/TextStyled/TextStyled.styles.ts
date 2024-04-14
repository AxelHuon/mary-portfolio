import { TextStyledProps } from '@/components/Atomes/TextStyled/TextStyled';
import { css } from 'styled-components';

export const baseTextStyle = css<TextStyledProps>`
  margin: 0;
  padding: 0;
  text-align: ${props => props.$align};
  color: ${props => props.color};
  span {
    &:nth-child(1) {
      color: ${props => props.$spanColorOne};
    }
    &:nth-child(2) {
      color: ${props => props.$spanColorTwo || props.$spanColorTwo};
    }
  }
`;

export const TextTypesStyles = {
  LargeTitle: css`
    font-family: 'Chendolle', serif;
    font-size: clamp(100px, 15vw, 175px);
    font-weight: 500;
    line-height: clamp(100px, 15vw, 175px);
    letter-spacing: 9px;
  `,
  MediumTitle: css`
    font-family: 'Chendolle', serif;
    font-weight: 500;
    font-size: 150px;
    line-height: 150px;
  `,
  LittleTitle: css`
    font-family: 'Chendolle', serif;
    font-weight: 500;
    font-size: 100px;
    line-height: 100px;
  `,
  HeadlineEmphasized: css`
    font-family: 'Chendolle', serif;
    font-weight: 500;
    font-size: 75px;
    line-height: 75px;
  `,
  SubHeadlineEmphasized: css`
    font-family: 'Chendolle', serif;
    font-weight: 500;
    font-size: 50px;
    line-height: 50px;
  `,
  CalloutEmphasized: css`
    font-family: 'Chendolle', serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
  `,
  CalloutRegular: css`
    font-family: 'Montserrat', serif;
    font-size: 30px;
    line-height: initial;
    font-weight: 400;
  `,
  CalloutVariant: css`
    font-family: 'Montserrat', serif;
    font-size: 30px;
    line-height: initial;
    font-weight: 600;
  `,
  BodyEmphasized: css`
    font-family: 'Chendolle', serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  `,
  BodyRegular: css`
    font-family: 'Montserrat', serif;
    font-size: 16px;
    line-height: initial;
    font-weight: 400;
  `,
  BodyVariant: css`
    font-family: 'Montserrat', serif;
    font-size: 16px;
    line-height: initial;
    font-weight: 600;
  `,
};
