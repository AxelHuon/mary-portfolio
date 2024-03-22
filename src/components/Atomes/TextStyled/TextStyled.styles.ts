import { TextStyledProps } from '@/components/Atomes/TextStyled/TextStyled';
import { css } from 'styled-components';

export const baseTextStyle = css<TextStyledProps>`
  margin: 0;
  padding: 0;
  text-align: ${props => props.$align};
  color: ${props => props.color};
  span:nth-child(1) {
    color: ${props => props.$spanColorOne};
  }
  span:nth-child(2) {
    color: ${props => props.$spanColorTwo || props.$spanColorOne};
  }
`;

export const TextTypesStyles = {
  LargeTitle: css`
    font-family: 'Nanum Pen', serif;
    font-size: 175px;
    font-weight: 500;
    line-height: 150px;
  `,
  MediumTitle: css`
    font-family: 'Nanum Pen', serif;
    font-weight: 500;
    font-size: 150px;
    line-height: 120px;
  `,
  LittleTitle: css`
    font-family: 'Nanum Pen', serif;
    font-weight: 500;
    font-size: 100px;
    line-height: 75px;
  `,
  HeadlineEmphasized: css`
    font-family: 'Nanum Pen', serif;
    font-weight: 500;
    font-size: 75px;
    line-height: 60px;
  `,
  SubHeadlineEmphasized: css`
    font-family: 'Nanum Pen', serif;
    font-weight: 500;
    font-size: 50px;
    line-height: 40px;
  `,
  CalloutEmphasized: css`
    font-family: 'Nanum Pen', serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 25px;
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
    font-family: 'Nanum Pen', serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150px;
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
