import styled, { css } from 'styled-components';

import * as Animation from './animation';

export const Wrapper = styled.div`
  max-width: 1830px;
`;

export const HelpChildren = styled.div`
  width: 100%;
  border-radius: 130px;

  ${({ theme }) => css`
    display: grid;
    background: ${theme.colors.helpChildren.bg};

    ${theme.responsive.isMobile &&
    css`
      grid-template-columns: 100%;
      grid-template-rows: min-content min-content 280px min-content;
      justify-items: center;
      padding: 59px 0 82px;
    `}

    ${theme.responsive.isTablet &&
    css`
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: min-content min-content min-content;
      padding: 42px 55px 52px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      grid-template-columns: 600px 1fr;
      grid-template-rows: min-content min-content min-content;
      padding: 42px 110px 86px 52px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      grid-template-columns: 400px 1fr;
      grid-template-rows: min-content min-content min-content;
      padding: 52px 128px 64px;
    `}
  `}
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      padding-bottom: 30px;
    `}

    ${theme.responsive.isTablet &&
    css`
      grid-column: 1 / 2;
      padding-bottom: 38px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      padding-bottom: 70px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      padding-bottom: 48px;
    `}
  `}
`;

export const Text = styled.p`
  line-height: 23px;
  font-family: 'Proxima Nova', sans-serif;

  ${({ theme }) => css`
    color: ${theme.colors.blackColorText};

    ${theme.responsive.isMobile &&
    css`
      margin: 0 60px 14px;
      font-size: 14px;
    `}

    ${theme.responsive.isTablet &&
    css`
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      margin: 0 auto 39px;
      font-size: 16px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin: 0 auto 30px;
      font-size: 18px;
    `}
  `}
`;

export const StylizedBtn = styled.div`
  align-self: flex-end;

  button {
    width: inherit;
    height: inherit;
    line-height: 23px;
    border-radius: 30px;
    column-gap: 0;

    ${({ theme }) => css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.btnBlue};

      :hover {
        background-color: ${theme.colors.btnBlueActive};
      }

      ${theme.responsive.isMobile &&
      css`
        font-size: 14px;
        padding: 9px 15px;
        margin-top: 36px;
      `}

      ${theme.responsive.isTablet &&
      css`
        grid-column: 1/2;
        grid-row: 3/4;
        font-size: 16px;
        padding: 13px 21px;
        margin: 0;
      `}

      ${theme.responsive.isDesktop &&
      css`
        padding: 14px 22px;
        font-size: 18px;
      `}
    `}

    span {
      margin-right: 10px;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const PhotoWrapper = styled.div`
  position: relative;

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      min-width: 290px;
    `}

    ${theme.responsive.isTablet &&
    css`
      grid-column: 2/3;
      grid-row: 1/4;
      justify-self: flex-end;
      height: 368px;
      width: 350px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      grid-column: 2/3;
      grid-row: 1/4;
      height: 391px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      grid-column: 2/3;
      grid-row: 1/4;
      justify-self: flex-end;
      height: 438px;
      width: 1030px;
    `}
  `}
`;

const photoStyles = css`
  position: absolute;
  width: 100px;
  height: 140px;
  object-fit: cover;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 120px;
      height: 180px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      height: 342px;
      width: 232px;
    `}
  `};
`;

export const PhotoOne = styled.img`
  ${photoStyles};
  z-index: 2;

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      top: 30px;
      left: 20px;
      transform: rotate(-50deg);
    `}

    ${theme.responsive.isTablet &&
    css`
      top: 48px;
      left: 24px;
      transform: rotate(-50deg);
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 48px;
      left: 12px;
      transform: rotate(-60deg);
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 85px;
      left: 0;
      transform: rotate(-110deg);
      animation: ${Animation.rotateAnimation} 2s linear forwards;
      z-index: 4;
    `}
  `}
`;

export const PhotoTwo = styled.img`
  ${photoStyles};

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      bottom: 30px;
      right: 4px;
      transform: rotate(28deg);
    `}

    ${theme.responsive.isTablet &&
    css`
      bottom: 54px;
      right: 10px;
      transform: rotate(30deg);
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      bottom: 46px;
      right: 20px;
      transform: rotate(30deg);
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 76px;
      left: 238px;
      width: 232px;
      height: 342px;
      transform: rotate(30deg);
      animation: ${Animation.rotateAnimationTwo} 2s linear forwards;
      animation-delay: 1.5s;
      opacity: 0;
      z-index: 3;
    `}
  `}
`;

export const PhotoThree = styled.img`
  ${photoStyles};

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      bottom: 34px;
      left: 0;
      transform: rotate(-30deg);
    `}

    ${theme.responsive.isTablet &&
    css`
      bottom: 48px;
      left: 14px;
      transform: rotate(-30deg);
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      bottom: 48px;
      left: 14px;
      transform: rotate(-30deg);
    `}

    ${theme.responsive.isDesktop &&
    css`
      bottom: 56px;
      left: 500px;
      height: 232px;
      width: 342px;
      transform: rotate(-34deg);
      animation: ${Animation.rotateAnimationThree} 2s linear forwards;
      animation-delay: 3s;
      opacity: 0;
      z-index: 2;
    `}
  `}
`;

export const PhotoFour = styled.img`
  ${photoStyles};

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      top: 14px;
      right: 8px;
      width: 100px;
      height: 140px;
      transform: rotate(17deg);
    `}

    ${theme.responsive.isTablet &&
    css`
      top: 50px;
      right: 25px;
      width: 120px;
      height: 180px;
      transform: rotate(17deg);
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 50px;
      right: 25px;
      transform: rotate(17deg);
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 30px;
      right: 50px;
      width: 232px;
      height: 342px;
      transform: rotate(17deg);
      animation: ${Animation.rotateAnimationFour} 2s linear forwards;
      animation-delay: 4.5s;
      opacity: 0;
    `}
  `}
`;
