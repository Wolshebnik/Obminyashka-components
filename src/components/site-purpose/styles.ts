import styled, { css } from 'styled-components';

import * as Image from 'components/img';

export const PresentSection = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(136deg, #a3dee5 23.74%, #34a2ce 100%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25%;
    background-image: url(${Image.newMaskCloud});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    z-index: 1;
  }

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      height: 550px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      height: 700px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      height: 1040px;
    `}
  `}
`;
