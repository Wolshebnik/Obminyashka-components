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
  width: 100%;
  padding: 132px 0 48px;
  overflow: hidden;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  background: linear-gradient(105deg, #97d7e3 20%, #39a5cf 115%);

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      padding: 136px 0 44px;
    `}

    ${theme.responsive.isTablet &&
    css`
      padding: 240px 0 96px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      padding: 336px 0 176px;
    `}    

    ${theme.responsive.isDesktopBS &&
    css`
      padding: 336px 0 116px;
    `}
  `}
`;

export const SunBlock = styled.div`
  top: 32px;
  position: absolute;
  width: 100px;
  z-index: 5;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      top: 36px;
    `}

    ${theme.responsive.isTablet &&
    css`
      top: 80px;
      width: 160px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 100px;
      width: 240px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
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
    ${theme.responsive.isDesktopBS &&
    css`
      :hover {
        animation: ${Animation.sunIconAnimation} 3s ease-out forwards;
      }
    `}
  `}
`;

export const Wrapper = styled.div`
  padding: 20px 0 80px;
  display: flex;
  flex-direction: column;
  position: relative;
  row-gap: 20px;
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
  //justify-content: center;
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
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      :hover {
        animation: ${Animation.clockHoverAnimation} 0.1s linear infinite;
      }
    `}
  `}
`;

export const CloudNull = styled.div`
  ${CloudStyles}

  display: none;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 52px;
      right: calc(50% - 240px);
      transform: rotate(10deg) translateX(100%);
      display: flex;
      width: 172px;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 400px;
      right: calc(50% - 472px);
      width: 116px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      display: none;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: 596px;
      right: calc(50% - 696px);
      display: flex;
      width: 148px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      top: 588px;
      width: 164px;
      transform: rotate(10deg);
      animation: ${Animation.cloudNullAnimation} 70s linear -10s infinite;
    `}
  `}
`;

export const CloudOne = styled.div`
  ${CloudStyles}

  display: none;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      top: 245px;
      right: calc(50% - 172px);
      transform: rotateY(180deg) translateX(-100%);
      display: flex;
      width: 92px;
    `}

    ${theme.responsive.isTablet &&
    css`
      display: none;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 236px;
      right: calc(50% - 580px);
      display: flex;
      width: 88px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      display: none;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      top: 354px;
      display: flex;
      transform: rotateY(180deg);
      width: 124px;
      animation: ${Animation.cloudsAnimationMirror} 65s ease-out -2.2s infinite;
    `}
  `}
`;

export const CloudTwo = styled.div`
  ${CloudStyles}

  display: none;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      top: 92px;
      left: calc(50% - 176px);
      transform: rotateY(180deg) translateX(100%);
      display: flex;
      width: 92px;
    `}

    ${theme.responsive.isTablet &&
    css`
      top: 432px;
      left: calc(50% - 318px);
      width: 120px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 452px;
      left: calc(50% - 400px);
      width: 120px;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 416px;
      left: calc(50% - 540px);
      width: 160px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      display: none;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: 616px;
      left: calc(50% - 744px);
      display: flex;
      width: 228px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      top: 608px;
      left: inherit;
      transform: rotateY(180deg);
      animation: ${Animation.cloudsAnimationMirror} 75s linear -68s infinite;
    `}
  `}
`;

export const CloudThree = styled.div`
  ${CloudStyles}

  display: none;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 85px;
      left: calc(50% - 228px);
      transform: translateX(-100%);
      display: flex;
      width: 120px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 64px;
      left: calc(50% - 404px);
      width: 120px;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 112px;
      left: calc(50% - 538px);
      width: 160px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      display: none;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: 184px;
      left: calc(50% - 740px);
      display: flex;
      width: 228px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      top: 180px;
      left: inherit;
      transform: inherit;
      animation: ${Animation.cloudsAnimation} 95s ease-in-out -75s infinite;
    `}
  `}
`;

export const CloudFour = styled.div`
  ${CloudStyles}

  top: 288px;
  left: calc(50% - 200px);
  width: 60px;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      left: calc(50% - 192px);
    `}

    ${theme.responsive.isTablet &&
    css`
      display: none;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 560px;
      left: calc(50% - 380px);
      transform: translateX(-100%);
      display: flex;
      width: 84px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 824px;
      left: calc(50% - 512px);
      width: 120px;
    `}

    ${theme.responsive.isDesktopMD &&
    css`
      left: calc(50% - 508px);
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      left: calc(50% - 516px);
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      top: 816px;
      left: inherit;
      transform: inherit;
      animation: ${Animation.cloudsAnimation} 90s linear -70s infinite;
    `}
  `}
`;

export const CloudFive = styled.div`
  ${CloudStyles}

  display: none;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      bottom: 124px;
      right: calc(50% - 324px);
      transform: translateX(100%);
      display: flex;
      width: 112px;
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      bottom: 112px;
      right: calc(50% - 180px);
      width: 312px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      bottom: 184px;
      right: calc(50% - 284px);
      width: 444px;
    `}

    ${theme.responsive.isDesktopMD &&
    css`
      right: calc(50% - 288px);
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      bottom: 172px;
      right: calc(50% - 148px);
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      bottom: 56px;
      width: 212px;
      transform: inherit;
      animation: ${Animation.cloudsAnimation} 85s ease-in-out -42s infinite;
    `}
  `}
`;

export const CloudSix = styled.div`
  ${CloudStyles}

  display: none;

  ${({ theme }) => css`
    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 240px;
      left: calc(50% - 288px);
      transform: translateX(-100%);
      display: flex;
      width: 100px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 368px;
      left: calc(50% - 380px);
      width: 140px;
    `}

    ${theme.responsive.isDesktopMD &&
    css`
      left: calc(50% - 376px);
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      left: inherit;
      transform: inherit;
      animation: ${Animation.cloudsAnimation} 80s linear -59s infinite;
    `}
  `}
`;

export const CloudSeven = styled.div`
  ${CloudStyles}

  top: 104px;
  right: calc(50% - 128px);
  transform: translateX(100%);
  width: 60px;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      right: calc(50% - 132px);
    `}

    ${theme.responsive.isTablet &&
    css`
      top: 344px;
      right: calc(50% - 220px);
      width: 64px;
    `}

    ${theme.responsive.isTabletBG &&
    css`
      top: 352px;
      right: calc(50% - 460px);
    `}

    ${theme.responsive.isTabletBG &&
    theme.responsive.isLandscape &&
    css`
      top: 160px;
      right: calc(50% - 284px);
      width: 84px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 254px;
      right: calc(50% - 432px);
      width: 120px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      right: calc(50% - 440px);
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      transform: inherit;
      animation: ${Animation.cloudsAnimation} 120s linear -32s infinite;
    `}
  `}
`;
