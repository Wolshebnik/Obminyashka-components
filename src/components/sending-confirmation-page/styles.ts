import styled, { css } from 'styled-components';
import { cloud, sunTransportForChildren, clockIcon } from '../img';

import * as Animation from './animation';

const CloudStyles = `
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: centre;
  aspect-ratio: 9/5;
  background-image: url(${cloud});
`;

const IconStyles = `
  background-size: contain;
  background-repeat: no-repeat;
  background-position: centre;
  aspect-ratio: 1/1;
`;

export const BackGround = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 132px 0 48px;
  width: 100%;
  background: linear-gradient(105deg, #97d7e3 20%, #39a5cf 115%);
  text-align: center;
  overflow: hidden;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      padding: 240px 0 96px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      padding: 336px 0 176px;
    `}
  `}
`;

export const SunBlock = styled.div`
  position: absolute;
  top: 32px;
  width: 100px;
  z-index: 5;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 80px;
      width: 160px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 100px;
      width: 240px;
      animation: ${Animation.sunBlockAnimation} 6s ease-out forwards;
      z-index: 2;
    `}
  `}
`;

export const SunIcon = styled.div`
  ${IconStyles}

  width: 100%;
  background-image: url(${sunTransportForChildren});

  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      :hover {
        animation: ${Animation.sunIconAnimation} 3s ease-out forwards;
      }
    `}
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px 0 80px;
  width: 344px;
  height: 248px;
  border-radius: 20px;
  box-shadow: 0px 2px 17px 0px rgba(0, 0, 0, 0.25);
  background: #fff;
  z-index: 3;
  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      padding: 32px 0 120px;
      row-gap: 28px;
      width: 544px;
      height: 392px;
      box-shadow: 0px 3px 27px 0px rgba(0, 0, 0, 0.25);
    `}

    ${theme.responsive.isDesktop &&
    css`
      padding: 64px 0 180px;
      row-gap: 44px;
      width: 804px;
      height: 576px;
      border-radius: 22px;
      box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
    `}
  `}
`;

export const Title = styled.div`
  padding-bottom: 12px;
  border-style: none none solid none;
  border-color: #29a5d4;
  border-width: 1px;
  color: #29a5d4;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      padding-bottom: 20px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      padding-bottom: 16px;
      border-width: 2px;
      font-size: 16px;
    `}
  `}
`;

export const Text = styled.div`
  margin: 0 auto;
  width: 236px;
  color: #7ecde4;
  font-size: 12px;
  font-weight: 400;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 376px;
      font-size: 20px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      padding-bottom: 16px;
      width: 556px;
      font-size: 30px;
    `}
  `}
`;

export const ClockBlock = styled.div`
  ${IconStyles}

  width: 100%;
`;

export const ClockIcon = styled.div`
  ${IconStyles}

  margin: 0 auto;
  width: 60px;
  background-image: url(${clockIcon});

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 92px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 136px;
      :hover {
        animation: ${Animation.clockHoverAnimation} 0.1s linear infinite;
      }
    `}
  `}
`;

export const CloudNull = styled.div`
  ${CloudStyles}

  top: 52px;
  right: -200px;
  width: 80px;
  transform: rotate(10deg);
  animation: ${Animation.cloudNullAnimation} 15s linear 2s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 400px;
      width: 116px;
      animation: ${Animation.cloudNullAnimation} 25s linear -4s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 588px;
      animation: ${Animation.cloudNullAnimation} 40s linear -5s infinite;
    `}
  `}
`;

export const CloudOne = styled.div`
  ${CloudStyles}

  top: 100px;
  width: 92px;
  transform: rotateY(180deg);
  animation: ${Animation.cloudsAnimationMirror} 17s ease-out -5s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 236px;
      width: 88px;
      animation: ${Animation.cloudsAnimationMirror} 28s ease-out -1s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 352px;
      width: 124px;
      animation: ${Animation.cloudsAnimationMirror} 45s ease-out -2.2s infinite;
    `}
  `};
`;

export const CloudTwo = styled.div`
  ${CloudStyles}

  top: 152px;
  right: -200px;
  width: 92px;
  transform: rotateY(180deg);
  animation: ${Animation.cloudsAnimationMirror} 19s linear 5s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 432px;
      width: 160px;
      animation: ${Animation.cloudsAnimationMirror} 31s linear -28s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 616px;
      width: 228px;
      animation: ${Animation.cloudsAnimationMirror} 50s linear -43s infinite;
    `}
  `}
`;

export const CloudThree = styled.div`
  ${CloudStyles}

  top: 200px;
  width: 120px;
  animation: ${Animation.cloudsAnimation} 21s ease-in-out -15s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 100px;
      width: 160px;
      animation: ${Animation.cloudsAnimation} 34s ease-in-out -27s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 184px;
      width: 228px;
      animation: ${Animation.cloudsAnimation} 55s ease-in-out -40s infinite;
    `}
  `}
`;

export const CloudFour = styled.div`
  ${CloudStyles}

  top: 252px;
  width: 60px;
  animation: ${Animation.cloudsAnimation} 23s linear -10s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 560px;
      width: 84px;
      animation: ${Animation.cloudsAnimation} 37s linear -29s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 820px;
      width: 120px;
      animation: ${Animation.cloudsAnimation} 60s linear -44s infinite;
    `}
  `}
`;

export const CloudFive = styled.div`
  ${CloudStyles}

  top: 300px;
  right: -200px;
  width: 112px;
  animation: ${Animation.cloudsAnimation} 25s ease-in-out 10s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 460px;
      width: 312px;
      animation: ${Animation.cloudsAnimation} 40s ease-in-out -15s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 740px;
      width: 444px;
      animation: ${Animation.cloudsAnimation} 65s ease-in-out -32s infinite;
    `}
  `}
`;

export const CloudSix = styled.div`
  ${CloudStyles}

  top: 360px;
  right: -200px;
  width: 100px;
  animation: ${Animation.cloudsAnimation} 27s linear infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 240px;
      animation: ${Animation.cloudsAnimation} 43s linear -32s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 368px;
      width: 140px;
      animation: ${Animation.cloudsAnimation} 80s linear -59s infinite;
    `}
  `}
`;

export const CloudSeven = styled.div`
  ${CloudStyles}

  top: 104px;
  width: 60px;
  animation: ${Animation.cloudsAnimation} 30s linear -7s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 160px;
      width: 84px;
      animation: ${Animation.cloudsAnimation} 46s linear -12s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 254px;
      width: 120px;
      animation: ${Animation.cloudsAnimation} 120s linear -32s infinite;
    `}
  `}
`;
