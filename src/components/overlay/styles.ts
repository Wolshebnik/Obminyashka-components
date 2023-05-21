import styled, { css } from 'styled-components';

import { IOverlayStyles } from './types';

export const Overlay = styled.div<IOverlayStyles>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: 990;

  ${({ theme, isAnimation, delay, top }) => css`
    background-color: ${theme.colors.modalColors.background};
    transition: all ${delay}ms ease-in-out;

    ${top &&
    css`
      top: ${top}px;
    `}

    ${isAnimation &&
    css`
      opacity: 1;
      transition: all ${delay}ms ease-in-out;
    `}
  `};
`;
