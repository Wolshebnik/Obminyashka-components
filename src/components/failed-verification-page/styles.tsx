import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { cloud, egg } from '../img';

import * as Animation from './animation';

const CloudStyles = `
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: centre;
  aspect-ratio: 1.64;
  background-image: url(${cloud});
`;

const BtnStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 290px;
  height: 99px;
  border-radius: 25px;
  background: white;
  color: #81CBDE;
  font-size: 20px;
  font-weight: 700;
  text-transform: none;
  z-index: 2;
`;

export const BackGround = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: clamp(10px, 5vh, 92px);
  padding-bottom: clamp(10px, 8.2vh, 152px);
  width: 100%;
  max-height: 1132px;
  text-align: center;
  overflow: hidden;

  ${({ theme }) => css`
    background: ${theme.colors.defaultGradients.mainGradient};

    ${theme.responsive.isTablet &&
    css`
      max-height: 1192px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      max-height: 1300px;
    `}
  `}
`;

export const Title = styled.div`
  position: relative;
  margin-bottom: clamp(10px, 2vh, 32px);
  border-style: none;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  z-index: 2;

  ${({ theme }) => css`
    color: ${theme.colors.dealsColors.white};
    ${theme.responsive.isTablet &&
    css`
      font-size: 50px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      font-size: 60px;
    `}
  `}
`;

export const Text = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  padding: 0 6%;
  //color: #ffffff;
  font-size: 22px;
  font-weight: 400;
  z-index: 2;

  ${({ theme }) => css`
    color: ${theme.colors.dealsColors.white};
    ${theme.responsive.isTablet &&
    css`
      font-size: 35px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      max-width: 1366px;
      font-size: 45px;
      line-height: 52px;
    `}
  `}
`;

export const EggOnCloud = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: clamp(10px, 5.6vh, 104px) auto clamp(10px, 5.6vh, 28px);
  height: clamp(200px, 31.74vh, 564px);
  aspect-ratio: 4/5;
`;

export const Egg = styled.div`
  position: absolute;
  height: 82%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: centre;
  aspect-ratio: 4/5;
  background-image: url(${egg});
  z-index: 3;
`;

export const CloudForEgg = styled.div`
  ${CloudStyles}

  top: 56%;
  width: 100%;
  z-index: 2;
`;

export const BtnBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  row-gap: clamp(15px, 2vh, 50px);
  overflow: hidden;
  z-index: 3;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      flex-direction: row;
      column-gap: 60px;
      width: 640px;
      height: 50px;
    `}
  `}
`;

export const BtnRegistration = styled(Link)`
  ${BtnStyles}

  ${({ theme }) => css`
    color: ${theme.colors.newButton.default.blue.bg};
    background: ${theme.colors.newButton.default.blue.text};
  `}
`;

export const BtnPopup = styled.div`
  ${BtnStyles}

  ${({ theme }) => css`
    color: ${theme.colors.newButton.default.blue.disabledText};
    background: ${theme.colors.newButton.default.blue.text};
  `}
`;

export const CloudNull = styled.div`
  ${CloudStyles}

  display: none;
  right: calc(100% + 200px);
  width: 164px;
  transform: rotate(10deg);

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      display: flex;
      bottom: 20%;
      animation: ${Animation.cloudNullAnimation} 33s linear -3s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      animation: ${Animation.cloudNullAnimation} 50s linear -10s infinite;
    `}
  `}
`;

export const CloudOne = styled.div`
  ${CloudStyles}

  display: flex;
  right: calc(100% + 236px);
  top: 20%;
  width: 136px;
  transform: rotateY(180deg);
  animation: ${Animation.cloudsAnimationMirror} 13s ease-out -9s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      //top: clamp(190px, 35vh, 500px);
      animation: ${Animation.cloudsAnimationMirror} 36s ease-out infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      animation: ${Animation.cloudsAnimationMirror} 55s ease-out -5s infinite;
    `}
  `}
`;

export const CloudTwo = styled.div`
  ${CloudStyles}

  display: none;
  top: 45vh;
  right: calc(100% + 300px);
  transform: rotateY(180deg);
  width: 228px;
  animation: ${Animation.cloudsAnimationMirror} 16s ease-out 3s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      display: flex;
      top: 30%;
      //clamp(400px, 48vh, 600px);
      width: 244px;
      animation: ${Animation.cloudsAnimationMirror} 60s linear -43s infinite;
    `}
  `}
`;

export const CloudThree = styled.div`
  ${CloudStyles}

  display: none;
  right: calc(100% + 248px);
  width: 224px;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      display: flex;
      top: 2%;
      animation: ${Animation.cloudsAnimation} 25s ease-in-out 5s infinite;
    `}

    ${theme.responsive.isTablet &&
    css`
      animation: ${Animation.cloudsAnimation} 42s ease-in-out 15s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      animation: ${Animation.cloudsAnimation} 65s ease-in-out -48s infinite;
    `}
  `}
`;

export const CloudFour = styled.div`
  ${CloudStyles}

  display: flex;
  bottom: 3%;
  right: calc(100% + 220px);
  width: 120px;
  animation: ${Animation.cloudsAnimation} 19s linear -3s infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      animation: ${Animation.cloudsAnimation} 45s linear -38s infinite;
    `}

    ${theme.responsive.isDesktop &&
    css`
      animation: ${Animation.cloudsAnimation} 70s linear -50s infinite;
    `}
  `}
`;
