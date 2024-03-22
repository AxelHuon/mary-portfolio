import styled, { css } from 'styled-components';
import { ButtonProps } from './ButtonLink';

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px;
  cursor: pointer;
  border: none;
  width: fit-content;
  letter-spacing: 5%;
  color: #fff;

  a {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;
