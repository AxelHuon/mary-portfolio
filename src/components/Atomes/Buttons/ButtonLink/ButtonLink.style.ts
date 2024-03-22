import styled, { css } from 'styled-components';
import { ButtonProps } from './ButtonLink';
import { TextTypesStyles } from '../../TextStyled/TextStyled.styles';

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px;
  cursor: pointer;
  border: none;
  width: fit-content;
  letter-spacing: 5%;

  background-color: ${({ backgroundColor }) => backgroundColor};
  a {
    ${TextTypesStyles.BodyEmphasized}
    color: ${({ color }) => color};
    text-decoration: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;
