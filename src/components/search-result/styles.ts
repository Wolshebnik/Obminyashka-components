import styled, { css, keyframes } from 'styled-components';

import { sunDesktop, sunMobile, sunTablet } from 'components/img';

import { IWindowWidth } from './types';

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
  25% {
     bottom:11%;
     left: 36%;
     transform: rotateZ(7deg);
  }
  37.5% {
     bottom: 14%;
     left: 40%;
     transform: rotateZ(-7deg);
  }
  50% {
    bottom: 16%;
    left: 43%;
    transform: rotateZ(7deg);
  }
  62.5% {
    bottom: 14%;
    left: 46%;
    transform: rotateZ(-7deg);
  }
  75% {
     bottom: 11%;
     left: 50%;
     transform: rotateZ(7deg);
  }
  87.5% {
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

export const displayStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${displayStyles}
`;

export const Wrapper = styled.div`
  max-width: 351px;
  max-height: 212px;
  color: ${({ theme }) => theme.colors.searchResult.white};

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      max-width: 875px;
      max-height: 490px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      max-width: 1455px;
      max-height: 880px;
    `}
  `}

  ${displayStyles};
`;

export const MainCloud = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    ${({ theme }) => theme.colors.searchResult.gradient}
  );

  ${displayStyles};
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 23%;
  flex-direction: column;
  z-index: 5;

  ${displayStyles}
`;

export const Title = styled.p<IWindowWidth>`
  margin-bottom: 11px;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  ${({ theme, windowWidth }) => css`
    ${theme.responsive.isTablet &&
    css`
      margin-bottom: 24px;
      font-size: 35px;
      line-height: 40px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-bottom: 45px;
      font-size: 60px;
      line-height: 70px;
    `}

     ${windowWidth < 1700 &&
    theme.responsive.isDesktop &&
    css`
      margin-bottom: 35px;
      font-size: 50px;
      line-height: 58px;
    `}
  `}
`;

export const Text = styled.p<IWindowWidth>`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  ${({ theme, windowWidth }) => css`
    ${theme.responsive.isTablet &&
    css`
      font-size: 23px;
      line-height: 27px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      font-size: 40px;
      line-height: 47px;
    `}

    ${windowWidth < 1700 &&
    theme.responsive.isDesktop &&
    css`
      font-size: 30px;
      line-height: 34px;
    `}
  `}
`;

export const StyledImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  transform: scale(1.01);
  z-index: 15;
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
  animation: ${sunAnimation} 7s linear infinite;
  z-index: 5;

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
