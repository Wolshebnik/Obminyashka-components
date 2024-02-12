import styled, { keyframes, css } from 'styled-components';

import { cloud } from 'components/img';

const moveClouds1 = keyframes`
  0% {
    right: 23%;
  }
  70% {
    right: 100%;
    opacity: 1;
    transform: translateX(-100%);
  }
  70.1% {
    right: 0%;
    opacity: 0;
    transform: translateX(100%)
  }
  70.2% {
    opacity: 1;
  }
  100% {
    right: 23%;
  }
`;

const moveClouds2 = keyframes`
  0% {
    left: 16%; 
  }
  23% {
    left: 0%;
    opacity: 1;
    transform: translateX(-100%);
  }
  23.1% {
    left: 100%;
    opacity: 0;
    transform:translateX(100%);
  }
  23.2% {
    opacity: 1;
  }
  100% {
    left:16%;
  }
`;

const moveClouds3 = keyframes`
  0% {
    left: 0%; 
  }
  10% {
    left: 0%;
    opacity: 1;
    transform: translateX(-100%);
  }
  10.1% {
    left: 100%;
    opacity: 0;
    transform:translateX(100%);
  }
  10.2% {
    opacity: 1;
  }
  100% {
    left:0%;
  }
`;

const moveClouds4 = keyframes`
 0% {
    left: 0%; 
  }
  10% {
    left: 0%;
    opacity: 1;
    transform: translateX(-100%);
  }
  10.1% {
    left: 100%;
    opacity: 0;
    transform:translateX(100%);
  }
  10.2% {
    opacity: 1;
  }
  100% {
    left:0%;
  }
`;

const moveClouds5 = keyframes`
  0% {
    right: 6%;
  }
  85% {
    right: 100%;
    opacity: 1;
    transform: translateX(-100%);
  }
  85.1% {
    right: 0%;
    opacity: 0;
    transform: translateX(100%)
  }
  85.2% {
    opacity: 1;
  }
  100% {
    right: 6%;
  }
`;

const moveClouds6 = keyframes`
  0% {
    right: 14%;
  }
  75% {
    right: 100%;
    opacity: 1;
    transform: translateX(-100%);
  }
  75.1% {
    right: 0%;
    opacity: 0;
    transform: translateX(100%)
  }
  75.2% {
    opacity: 1;
  }
  100% {
    right: 14%;
  }
`;

const moveClouds7 = keyframes`
  0% {
    left: 22%; 
  }
  28% {
    left: 0%;
    opacity: 1;
    transform: translateX(-100%);
  }
  28.1% {
    left: 100%;
    opacity: 0;
    transform:translateX(100%);
  }
  28.2% {
    opacity: 1;
  }
  100% {
    left:22%;
  }
`;

const moveClouds8 = keyframes`
  0% {
    right: 2%;
  }
  90% {
    right: 100%;
    opacity: 1;
    transform: translateX(-100%);
  }
  90.1% {
    right: 0%;
    opacity: 0;
    transform: translateX(100%)
  }
  90.2% {
    opacity: 1;
  }
  100% {
    right: 2%;
  }
`;

const mainStyles = css`
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${cloud});
  z-index: 1;
`;

export const FirstCloud = styled.span`
  top: 25%;
  right: 23%;
  width: 60px;
  height: 32px;
  animation: ${moveClouds1} 32s linear infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 11%;
      width: 176px;
      height: 103px;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 22%;
      width: 85px;
      height: 43px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 121px;
      height: 63px;
    `}
  `}
  ${mainStyles};
`;

export const SecondCloud = styled.span`
  top: 67%;
  left: 16%;
  width: 60px;
  height: 32px;
  animation: ${moveClouds2} 33s linear infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 75%;
      width: 113px;
      height: 61px;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 78%;
      width: 85px;
      height: 44px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 76%;
      width: 120px;
      height: 62px;
    `}
  `}
  ${mainStyles};
`;

export const ThirdCloud = styled.span`
  display: none;
  top: 22%;
  left: 0%;
  width: 94px;
  height: 55px;
  animation: ${moveClouds3} 15s linear infinite;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      display: initial;
    `}

    ${theme.responsive.isTablet &&
    css`
      top: 12%;
      width: 120px;
      height: 65px;
    `}
    
    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 15%;
      width: 159px;
      height: 82px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      display: none;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      display: initial;
      top: 17%;
      width: 225px;
      height: 116px;
    `}
  `}

  ${mainStyles};
`;

export const FourthCloud = styled.span`
  display: none;
  top: 60%;
  left: 0%;
  width: 121px;
  height: 77px;
  animation: ${moveClouds4} 20s linear infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      display: initial;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 57%;
      width: 165px;
      height: 97px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      display: none;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      display: initial;
      width: 226px;
      height: 138px;
    `}
  `}

  ${mainStyles};
`;

export const FifthCloud = styled.span`
  display: none;
  top: 57%;
  right: 6%;
  width: 91px;
  height: 55px;
  animation: ${moveClouds5} 22s linear infinite;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      display: initial;
    `}

    ${theme.responsive.isTablet &&
    css`
      top: 47%;
      width: 64px;
      height: 35px;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 55%;
      width: 116px;
      height: 66px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      display: none;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      display: initial;
      width: 164px;
      height: 94px;
    `}
  `}

  ${mainStyles};
`;

export const SixthCloud = styled.span`
  display: none;
  top: 63%;
  right: 14%;
  width: 311px;
  height: 158px;
  animation: ${moveClouds6} 20s linear infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      display: initial;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 442px;
      height: 224px;
    `}
  `}

  ${mainStyles};
`;

export const SeventhCloud = styled.span`
  display: none;
  top: 33%;
  left: 22%;
  width: 98px;
  height: 51px;
  animation: ${moveClouds7} 26s linear infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      display: initial;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 140px;
      height: 72px;
    `}
  `}

  ${mainStyles};
`;

export const EighthCloud = styled.span`
  display: none;
  top: 33%;
  right: 2%;
  width: 87px;
  height: 53px;
  animation: ${moveClouds8} 40s linear infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      display: initial;
    `}

    ${theme.responsive.isDesktop &&
    css`
      display: none;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      display: initial;
    `}
  `}

  ${mainStyles};
`;
