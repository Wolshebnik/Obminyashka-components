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
  left: -11%;

  ${({ theme }) => css`
    animation: ${Animation.move1} 15s linear infinite;

    ${theme.responsive.isTablet &&
    css`
      width: 120px;
      height: 65px;
    `}

    ${theme.responsive.isTabletUp &&
    css`
      top: 15%;
      width: 160px;
      height: 80px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 3%;
      width: 225px;
      height: 120px;
    `}
  `}
`;

export const SecondSmallTopCloud = styled.div`
  ${cloudStyles};

  top: 25%;
  left: 7%;
  width: 60px;
  height: 32px;
  z-index: -1;

  ${({ theme }) => css`
    animation: ${Animation.move2} 15s linear infinite;

    ${theme.responsive.isTablet &&
    css`
      top: 12%;
      left: 29%;
      width: 65px;
      height: 35px;
    `}

    ${theme.responsive.isTabletUp &&
    css`
      top: 48%;
      left: 11%;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 120px;
      height: 65px;
    `}
  `}
`;

export const ThirdLeftCloud = styled.div`
  ${cloudStyles};

  top: 44%;
  left: -13%;
  width: 245px;
  height: 144px;
  animation: ${Animation.move3} 15s linear infinite;
`;

export const BottomLeftSmallCloud = styled.div`
  ${cloudStyles};

  top: 73%;
  left: -6%;
  width: 120px;
  height: 65px;
  animation: ${Animation.move4} 15s linear infinite;
`;

export const RightTopCloud = styled.div`
  ${cloudStyles};

  top: 12%;
  right: -11%;
  width: 230px;
  height: 130px;
  animation: ${Animation.move5} 15s linear infinite;
`;

export const RightMiddleCloud = styled.div`
  ${cloudStyles};

  top: -60%;
  right: 25%;
  width: 120px;
  height: 65px;
  animation: ${Animation.move6} 15s linear infinite;
  z-index: -1;
`;

export const RightBottomCloud = styled.div`
  ${cloudStyles};

  top: 65%;
  left: 100%;
  width: 120px;
  height: 60px;
  animation: ${Animation.move7} 15s linear infinite;
  z-index: -1;
`;

export const HappySun = styled.div`
  position: absolute;
  background-image: url(${Image.sun});
  background-repeat: no-repeat;
  background-size: cover;

  top: 6%;
  left: -8%;
  width: 145px;
  height: 145px;
  animation: ${Animation.move8} 15s linear infinite;
`;
