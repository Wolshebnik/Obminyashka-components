import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

import * as Animation from '../animation';

const textStyles = css`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: normal;

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

const stylesLinkText = css`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navCategory.colorHoveredText};
  cursor: pointer;
`;

const ColunmsStyles = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 100%;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: static;
    `}
  `}
`;

const BlockProperties = css`
  width: 245px;

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
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  overflow: hidden;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 640px;
      overflow: visible;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 1155px;
    `}
  `}
`;

export const ColumnOne = styled.div`
  ${ColunmsStyles}

  bottom: 55px;
  animation: ${Animation.ColunmAnimation1} 10s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      bottom: 100px;
    `}

    ${theme.responsive.isTablet &&
    css`
      animation: none;
    `}
  `}
`;

export const Furniture = styled.img`
  margin-bottom: 20px;
  width: 150px;
  height: 200px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
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
  ${BlockProperties}

  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 1;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
      top: 86%;
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

export const ThingsText = styled.div`
  ${textStyles};

  width: 160px;
  height: 80px;
  z-index: 1;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
      top: -135px;
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
      width: 290px;
      height: 122px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: -76%;
    `}
  `}
`;

export const ThingsTextLink = styled(Link)`
  ${stylesLinkText}
`;

export const FirstKeg = styled.img`
  ${BlockProperties}

  display: none;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
      display: block;
      top: -65px;
      left: 98px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      left: 56px;
      top: -80px;
      height: 170px;
    `}
      
      ${theme.responsive.isDesktop &&
    css`
      top: -31%;
      left: -6%;
      height: 210px;
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

export const ColumnTwo = styled.div`
  ${ColunmsStyles}

  left: 200%;
  bottom: -20px;
  animation: ${Animation.ColunmAnimation2} 10s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      bottom: 35px;
    `}

    ${theme.responsive.isTablet &&
    css`
      animation: none;
    `}
  `}
`;

export const Laptop = styled.img`
  margin-bottom: 40px;
  width: 140px;
  height: 120px;
  transform: rotate(-15deg);

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
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
  ${BlockProperties}

  display: flex;
  justify-content: center;
  height: 178px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
      top: 67%;
      left: 34%;
      height: 176px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 68%;
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

export const RegText = styled.div`
  ${textStyles};

  width: 140px;
  height: 55px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
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

export const RegTextLink = styled(Link)`
  ${stylesLinkText}
`;

export const SecondKeg = styled.img`
  ${BlockProperties}

  display: none;
  height: 113px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
      display: block;
      top: -22px;
      left: -9px;
      height: 190px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 5px;
      left: -25px;
      height: 190px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      top: 23px;
      left: 81%;
      height: 280px;
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

export const ColumnTree = styled.div`
  ${ColunmsStyles}

  left: 200%;
  bottom: -10px;
  animation: ${Animation.ColunmAnimation3} 10s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      bottom: 45px;
    `}

    ${theme.responsive.isTablet &&
    css`
      animation: none;
    `}
  `}
`;

export const Toys = styled.img`
  margin: 0 0 20px 15px;
  width: 205px;
  height: 190px;
  transform: rotate(18deg);

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
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
  ${BlockProperties}

  display: flex;
  justify-content: center;
  width: 245px;
  height: 168px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
      top: 73%;
      right: 0%;
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
      right: 20%;
      animation: ${Animation.stretchThirdColumn} 15s infinite;
    `}
  `}
`;

export const TradeText = styled.div`
  ${textStyles};

  width: 245px;
  height: 63px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
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

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: -30%;
      left: 26%;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      left: 36%;
      top: -43%;
      width: 383px;
      height: 157px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: -47%;
    `}
  `}
`;

export const TradeTextLink = styled(Link)`
  ${stylesLinkText}
`;

export const ThirdKeg = styled.img`
  ${BlockProperties}

  display: none;
  height: 110px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      position: absolute;
      display: block;
      top: -30px;
      left: 14px;
      height: 180px;
    `}

    ${theme.responsive.isTabletBG &&
    css`
      left: 28px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: -7px;
      left: 35px;
    `}
    
    ${theme.responsive.isDesktop &&
    css`
      top: -3px;
      height: 254px;
      left: 27%;
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
