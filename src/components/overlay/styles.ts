import styled, { css } from 'styled-components';

import { IOverlayStyles } from './types';

export const Overlay = styled.div<IOverlayStyles>`
  position: absolute;
  left: 0;
  width: 100vw;
  opacity: 0;
  transition: all 200ms ease-in-out;
  z-index: 1001;

  ${({ theme, isAnimation, duration, top, isHeader }) => css`
    background-color: ${theme.colors.modalColors.background};

    top: ${top ? top : 0}px;
    height: calc(100vh - ${top ? top : 0}px);

    ${isAnimation &&
    css`
      opacity: 1;
    `}

    ${!isAnimation &&
    css`
      transition-delay: ${duration - 200}ms;
    `}
    
    ${isHeader &&
    !theme.responsive.isMobile &&
    css`
      z-index: 999;
    `}
  `};
`;
