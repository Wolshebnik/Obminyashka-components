import styled, { css } from 'styled-components';

import * as Animation from './animation';

const rainbowCloudStyles = css`
  position: absolute;
  z-index: 2;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 190px;
      height: 110px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 300px;
      height: 170px;
    `}
  `}
`;

export const RainbowSection = styled.div`
  position: absolute;
  transform: translate(0, 55%);
`;

export const Rainbow = styled.img`
  z-index: 1;

  ${({ theme }) => css`
    animation: ${Animation.rainbowAnim} 6s linear infinite;

    ${theme.responsive.isTablet &&
    css`
      width: 458px;
      height: 233px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 860px;
      height: 438px;
    `}
  `}
`;

export const RainbowFirstCloud = styled.img`
  ${rainbowCloudStyles};

  top: 85%;
  right: 73%;
  animation: ${Animation.firstCloudAnim} 6s linear infinite;
`;

export const RainbowSecondCloud = styled.img`
  ${rainbowCloudStyles};

  top: 85%;
  left: 70%;
  animation: ${Animation.secondCloudAnim} 6s linear infinite;
`;

export const RedBallon = styled.img`
  position: absolute;
  top: 12%;
  left: 0%;
  z-index: 3;

  ${({ theme }) => css`
    animation: ${Animation.redBalloonAnim} 6s linear infinite;

    ${theme.responsive.isTablet &&
    css`
      width: 100px;
      height: 168px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 187px;
      height: 315px;
    `}
  `}
`;

export const YellowBallon = styled.img`
  position: absolute;
  top: 75%;
  left: 32%;
  z-index: 3;

  ${({ theme }) => css`
    animation: ${Animation.yellowBalloonAnim} 6s linear infinite;

    ${theme.responsive.isTablet &&
    css`
      width: 66px;
      height: 111px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 125px;
      height: 208px;
    `}
  `}
`;

export const OrangeBallon = styled.img`
  position: absolute;
  top: 15%;
  left: 70%;
  z-index: 3;

  ${({ theme }) => css`
    animation: ${Animation.orangeBalloonAnim} 6s linear infinite;

    ${theme.responsive.isTablet &&
    css`
      width: 111px;
      height: 187px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 208px;
      height: 350px;
    `}
  `}
`;
