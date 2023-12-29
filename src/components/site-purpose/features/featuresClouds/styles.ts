import styled, { css } from 'styled-components';

import * as Animation from './animation';
import * as Image from 'components/img';

const cloudStyles = css`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Image.cloud});
`;

export const WrapperForClouds = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const FirstLeftCloud = styled.div`
  ${cloudStyles};

  top: 3%;
  width: 72px;
  height: 40px;
  left: 2%;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 120px;
      height: 65px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 7%;
      width: 160px;
      height: 80px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 3%;
      width: 225px;
      height: 120px;
      animation: ${Animation.move1} 15s linear infinite;
    `}
  `}
`;

export const SecondSmallTopCloud = styled.div`
  ${cloudStyles};

  top: 36%;
  left: 2%;
  width: 60px;
  height: 32px;
  z-index: -1;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 40%;
      left: -2%;
      width: 133px;
      height: 77px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 40%;
      left: 10%;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: -10%;
      left: 60%;
      width: 120px;
      height: 65px;
      animation: ${Animation.move2} 15s linear infinite;
    `}
  `}
`;

export const ThirdLeftCloud = styled.div`
  ${cloudStyles};

  top: 74%;
  left: 15%;
  width: 30px;
  height: 16px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 75%;
      left: 12%;
      width: 65px;
      height: 35px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 70%;
      left: 6%;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 44%;
      width: 245px;
      height: 144px;
      animation: ${Animation.move3} 15s linear infinite;
    `}
  `}
`;

export const BottomLeftSmallCloud = styled.div`
  ${cloudStyles};

  top: 50%;
  left: -20%;
  width: 60px;
  height: 30px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 14%;
      left: 27%;
      width: 65px;
      height: 35px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 22%;
      left: 34%;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 73%;
      left: -6%;
      width: 120px;
      height: 65px;
      animation: ${Animation.move4} 15s linear infinite;
    `}
  `}
`;

export const RightTopCloud = styled.div`
  ${cloudStyles};

  top: 9%;
  right: -6%;
  width: 103px;
  height: 60px;
  transform: rotate(10deg);

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 10%;
      right: 5%;
      width: 120px;
      height: 70px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 11%;
      right: 8%;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 12%;
      right: -20%;
      width: 230px;
      height: 130px;
      animation: ${Animation.move5} 15s linear infinite;
    `}
  `}
`;

export const RightMiddleCloud = styled.div`
  ${cloudStyles};

  top: 45%;
  right: 9%;
  width: 60px;
  height: 32px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 34%;
      right: 25%;
      width: 65px;
      height: 35px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 28%;
      right: 24%;
      width: 123px;
      height: 71px;
      transform: rotate(10deg);
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: -20%;
      right: 30%;
      width: 120px;
      height: 65px;
      animation: ${Animation.move6} 15s linear infinite;
    `}
  `}
`;

export const RightBottomCloud = styled.div`
  ${cloudStyles};

  right: -9%;
  bottom: 20%;
  width: 30px;
  height: 16px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 75%;
      right: 1%;
      width: 65px;
      height: 35px;
      transform: rotate(10deg);
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 70%;
      right: 10%;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 65%;
      right: -10%;
      width: 120px;
      height: 60px;
      animation: ${Animation.move7} 15s linear infinite;
      z-index: -1;
    `}
  `}
`;

export const HappySun = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  height: 83px;
  width: 83px;
  background-image: url(${Image.sun});
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${Animation.SunMobile} 10s infinite;
  z-index: 1;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      animation: ${Animation.SunMobileBG} 10s infinite;
    `}

    ${theme.responsive.isTablet &&
    css`
      top: 5%;
      left: 5%;
      width: 80px;
      height: 80px;
      animation: none;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 14%;
      left: 15%;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 20%;
      left: 12%;
      width: 145px;
      height: 145px;
      animation: ${Animation.moveSun} 15s linear infinite;
    `}
  `}
`;
