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
      left: 213px;
      width: 150px;
      height: 65px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: -98%;
      left: 48%;
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
      left: 172px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: -49%;
      left: 26%;
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
  top: 26%;
  left: 42%;
  width: 318px;
  height: 270px;
  animation: ${Animation.appearanceSecondImages} 15s infinite;
`;

export const SecondBlock = styled.div`
  position: absolute;
  top: 67%;
  left: 40%;
  /* width: 135px; */
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
  top: -36%;
  left: 6%;
  width: 370px;
  height: 124px;
`;

export const SecondKeg = styled.img`
  position: absolute;
  z-index: -1;
`;

export const ThirdFeatures = styled.div``;

export const Toys = styled.img`
  position: absolute;
  top: 29%;
  left: 71%;
  width: 273px;
  height: 235px;
  animation: ${Animation.appearanceThirdImages} 15s infinite;
`;

export const ThirdBlock = styled.div`
  position: absolute;
  top: 72%;
  left: 61%;
  width: 428px;
  height: 342px;
  animation: ${Animation.stretchThirdColumn} 15s infinite;
`;

export const TradeText = styled.p`
  ${textStyles};

  position: absolute;
  left: 7%;
  bottom: 101%;
  width: 383px;
  height: 157px;
`;

export const ThirdKeg = styled.img`
  position: absolute;
`;
