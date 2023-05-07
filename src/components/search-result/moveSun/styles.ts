import styled, { keyframes, css } from 'styled-components';

import { IWindowWidth } from '../types';
import { displayStyles } from '../styles';
import { sunDesktop, sunMobile, sunTablet } from 'components/img';

const sunAnimation = keyframes`
  0% {
     bottom: 11%;
     left: 43%;
     transform: rotateZ(0);
  }
  12.5% {
     bottom: 8%;
     left: 38%;
     transform: rotateZ(-7deg);
  }
  25%{
     bottom:11%;
     left: 36%;
     transform: rotateZ(7deg);
  }
  37.5%{
     bottom: 14%;
     left: 40%;
     transform: rotateZ(-7deg);
  }
  50%{
    bottom: 16%;
    left: 43%;
    transform: rotateZ(7deg);
  }
  62.5%{
    bottom: 14%;
    left: 46%;
    transform: rotateZ(-7deg);
  }
  75%{
     bottom: 11%;
     left: 50%;
     transform: rotateZ(7deg);
  }
  87.5%{
     bottom: 8%;
     left: 48%;
     transform: rotateZ(-7deg);
  }
  100% {
     bottom:11%;
     left: 43%;
     transform: rotateZ(0)
  }
`;

export const DefaultSun = styled.div<IWindowWidth>`
  position: absolute;
  bottom: 14%;
  left: 43%;
  width: 75px;
  height: 75px;
  background-image: url(${sunMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 5;
  animation: ${sunAnimation} 7s linear infinite;

  ${({ theme, windowWidth }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 149px;
      height: 149px;
      background-image: url(${sunTablet});
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 269px;
      height: 269px;
      background-image: url(${sunDesktop});
    `}

    ${windowWidth < 370 &&
    theme.responsive.isMobile &&
    css`
      width: 60px;
      height: 60px;
    `}

    ${windowWidth < 1700 &&
    theme.responsive.isDesktop &&
    css`
      width: 219px;
      height: 219px;
    `}
  `}

  ${displayStyles}
`;
