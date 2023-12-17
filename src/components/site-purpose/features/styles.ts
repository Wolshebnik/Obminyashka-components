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
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      bottom: -100%;
      animation: ${Animation.featuresAnimation} 15s infinite;
    `}
  `}
`;

export const FeaturesWrapper = styled.div`
  position: relative;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 640px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 1155px;
    `}
  `}
`;

export const Furniture = styled.img`
  position: absolute;
  top: 51%;
  left: 3%;
  width: 110px;
  height: 133px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 23%;
      left: 2%;
      width: 145px;
      height: 170px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 36%;
      left: 6%;
      width: 148px;
      height: 177px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 25%;
      left: 4%;
      width: 276px;
      height: 332px;
      animation: ${Animation.appearanceFirstImages} 15s infinite;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: 22%;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      left: -5%;
    `}
  `}
`;

export const FirstBlock = styled.div`
  position: absolute;
  top: 86%;
  left: 7px;
  height: 85px;
  z-index: 1;

  ${blockProperties}

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      left: -75px;
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
      left: 0;
      animation: ${Animation.stretchFirstColumn} 15s infinite;
    `}
  `}
`;

export const ThingsText = styled.p`
  ${textStyles};

  position: relative;
  top: -42%;
  left: 2%;
  width: 106px;
  height: 49px;
  z-index: 1;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: -147px;
      left: 138px;
      width: 150px;
      height: 65px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: -118%;
      left: 43%;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      top: -70%;
      left: 14%;
      width: 280px;
      height: 122px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: -76%;
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
      top: -80px;
      left: 98px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      left: 56px;
      top: -80px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      top: -31%;
      left: -6%;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: -37%;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      top: -40%;
    `}
  `}
`;

export const Laptop = styled.img`
  position: absolute;
  top: 50%;
  left: 37%;
  width: 91px;
  height: 78px;
  transform: rotate(-15deg);

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 17%;
      left: 37%;
      width: 170px;
      height: 145px;
      transform: rotate(0);
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 32%;
      left: 40%;
      width: 170px;
      height: 145px;
      transform: rotate(0);
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 21%;
      left: 35%;
      width: 318px;
      height: 270px;
      animation: ${Animation.appearanceSecondImages} 15s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 19%;
    `}
  `}
`;

export const SecondBlock = styled.div`
  position: absolute;
  top: 67%;
  left: 34%;
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
      left: 0;
      animation: ${Animation.stretchSecondColumn} 15s infinite;
    `}
  `}
`;

export const RegText = styled.p`
  ${textStyles};

  position: absolute;
  top: 18px;
  left: 10px;
  width: 88px;
  height: 55px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: -90px;
      left: 10px;
      width: 197px;
      height: 66px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: -25%;
      left: 5%;
      width: 197px;
      height: 66px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      top: -35%;
      left: 87%;
      width: 370px;
      height: 124px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: -41%;
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
      top: -22px;
      left: -9px;
      height: 180px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 5px;
      left: -25px;
      height: 180px;
    `}

    
    
    ${theme.responsive.isDesktop &&
    css`
      left: 81%;
      height: 254px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: -5px;
    `} 

    ${theme.responsive.isDesktopBS &&
    css`
      top: -15px;
    `}
  `}
`;

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
      top: 22%;
      left: 77%;
      width: 170px;
      height: 145px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 37%;
      left: 75%;
      width: 170px;
      height: 145px;
      transform: rotate(9deg);
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 21%;
      left: 71%;
      width: 318px;
      height: 270px;
      animation: ${Animation.appearanceThirdImages} 15s infinite;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      top: 21%;
      left: 80%;
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
      left: 0;
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
      top: -100px;
      left: 30px;
      width: 204px;
      height: 84px;
    `}

    ${theme.responsive.isTabletBG &&
    css`
      top: -100px;
      left: 43px;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: -30%;
      left: 26%;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      left: 184%;
      top: -42%;
      width: 383px;
      height: 157px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: -47%;
    `}
  `}
`;

export const ThirdKeg = styled.img`
  ${blockProperties}

  position: absolute;
  top: 66px;
  left: -3px;
  height: 110px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: -30px;
      left: 14px;
      height: 180px;
    `}

    ${theme.responsive.isTabletBG &&
    css`
      top: -30px;
      left: 28px;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: -7px;
      left: 35px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      height: 254px;
      left: 177%;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: -20px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      top: -30px;
    `}
  `}
`;
