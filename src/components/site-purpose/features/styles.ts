import styled, { css } from 'styled-components';

import * as Animation from '../animation';

const textStyles = css`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: normal;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => css`
    color: ${theme.colors.white};

    ${theme.responsive.isTablet &&
    css`
      font-size: 18px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      font-size: 18px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      font-size: 35px;
    `}
  `}
`;

const blockProperties = css`
  width: 135px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 228px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      width: 268px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 428px;
    `}
  `}
`;

export const FeaturesSection = styled.div`
  position: absolute;
  /* bottom: -100%; */
  bottom: 0;
  width: 100%;
  height: 100%;
  /* animation: ${Animation.featuresAnimation} 15s infinite; */
`;

export const FirstFeatures = styled.div``;

export const Furniture = styled.img`
  position: absolute;
  top: 51%;
  left: 3%;
  width: 110px;
  height: 133px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 43%;
      left: 17%;
      width: 145px;
      height: 170px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 39%;
      left: 20%;
      width: 148px;
      height: 177px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 28%;
      left: 18%;
      width: 276px;
      height: 332px;
      animation: ${Animation.appearanceFirstImages} 15s infinite;
    `}
  `}
`;

export const FirstBlock = styled.div`
  position: absolute;
  top: 86%;
  left: 18px;
  height: 85px;
  z-index: 1;

  ${blockProperties}

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      height: 110px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      height: 130px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      height: 342px;
      bottom: 104px;
      left: 21%;
      animation: ${Animation.stretchFirstColumn} 15s infinite;
    `}
  `}
`;

export const ThingsText = styled.p`
  ${textStyles};

  position: relative;
  top: -42%;
  left: 10%;
  width: 106px;
  height: 49px;
  z-index: 1;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: -115px;
      left: 138px;
      width: 150px;
      height: 65px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      /* top: -98%;
      left: 48%; */
      top: -101%;
      left: 43%;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      top: -74%;
      left: 14%;
      width: 280px;
      height: 122px;
    `}
  `}
`;

export const FirstKeg = styled.img`
  ${blockProperties}

  position: absolute;
  top: 6%;
  left: 0;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: -47px;
      left: 98px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      left: 56px;
      top: -66px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      top: -36%;
      left: -6%;
      animation: ${Animation.stretchFirstColumn} 15s infinite;
    `}
  `}
`;

export const SecondFeatures = styled.div``;

export const Laptop = styled.img`
  position: absolute;
  top: 50%;
  left: 43%;
  width: 91px;
  height: 78px;
  transform: rotate(-15deg);

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 33%;
      left: 40%;
      width: 170px;
      height: 145px;
      transform: rotate(0);
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 34%;
      left: 46%;
      width: 170px;
      height: 145px;
      transform: rotate(0);
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 26%;
      left: 42%;
      width: 318px;
      height: 270px;
      animation: ${Animation.appearanceSecondImages} 15s infinite;
    `}
  `}
`;

export const SecondBlock = styled.div`
  position: absolute;
  top: 67%;
  left: 40%;
  height: 178px;

  ${blockProperties}

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      height: 176px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      height: 270px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      height: 342px;
      bottom: 104px;
      left: 21%;
      animation: ${Animation.stretchSecondColumn} 15s infinite;
    `}
  `}
`;

export const RegText = styled.p`
  ${textStyles};

  position: absolute;
  top: 18px;
  left: 3px;
  width: 117px;
  height: 55px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: -47px;
      left: 10px;
      width: 197px;
      height: 66px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: -16%;
      left: 12%;
      width: 197px;
      height: 66px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      top: -39%;
      left: 87%;
      width: 370px;
      height: 124px;
    `}
  `}
`;

export const SecondKeg = styled.img`
  position: absolute;
  z-index: -1;

  ${blockProperties}

  top: 77px;
  left: -10px;
  height: 113px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 23px;
      left: -9px;
      height: 180px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 23px;
      left: -9px;
      height: 180px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      height: 254px;
      top: -1px;
      left: 81%;
      animation: ${Animation.stretchSecondColumn} 15s infinite;
    `}
  `}
`;

export const ThirdFeatures = styled.div``;

export const Toys = styled.img`
  position: absolute;
  top: 55%;
  left: 68%;
  width: 120px;
  height: 103px;
  transform: rotate(18deg);

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 33%;
      left: 40%;
      width: 170px;
      height: 145px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 40%;
      left: 73%;
      width: 170px;
      height: 145px;
      transform: rotate(9deg);
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 30%;
      left: 71%;
      width: 318px;
      height: 270px;
      animation: ${Animation.appearanceThirdImages} 15s infinite;
    `}
  `}
`;

export const ThirdBlock = styled.div`
  position: absolute;
  top: 72%;
  left: 61%;
  height: 168px;

  ${blockProperties}

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      height: 195px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      height: 258px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      height: 419px;
      bottom: 104px;
      left: 21%;
      animation: ${Animation.stretchThirdColumn} 15s infinite;
    `}
  `}
`;

export const TradeText = styled.p`
  ${textStyles};

  position: absolute;
  top: 10px;
  left: 3px;
  width: 130px;
  height: 63px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: -49px;
      left: 43px;
      width: 204px;
      height: 84px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: -20%;
      left: 20%;
      width: 204px;
      height: 84px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      left: 184%;
      top: -45%;
      width: 383px;
      height: 157px;
    `}
  `}
`;

export const ThirdKeg = styled.img`
  position: absolute;

  ${blockProperties}

  top: 66px;
  left: -3px;
  height: 110px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 18px;
      left: 28px;
      height: 180px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 18px;
      left: 13px;
      height: 180px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      height: 254px;
      top: -19px;
      left: 177%;
      animation: ${Animation.stretchThirdColumn} 15s infinite;
    `}
  `}
`;
