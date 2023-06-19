import styled, { css } from 'styled-components';

import * as Animation from './animation';

export const HelpChildren = styled.div`
  border-radius: 130px;

  ${({ theme }) => css`
    display: grid;
    background: ${theme.colors.helpChildren.bg};

    ${theme.responsive.isMobile &&
    css`
      grid-template-columns: 100%;
      grid-template-rows: min-content min-content 280px min-content;
      justify-items: center;
      padding: 59px 60px 82px;
      margin-bottom: 50px;
    `}

    ${theme.responsive.isTablet &&
    css`
      grid-template-columns: 395px 365px;
      grid-template-rows: min-content min-content min-content;
      column-gap: 70px;
      padding: 42px 55px 72px 52px;
      margin-bottom: 70px;
    `}

    ${theme.responsive.isTabletUp &&
    css`
      grid-template-columns: 600px 420px;
      grid-template-rows: min-content min-content min-content;
      column-gap: 100px;
      padding: 42px 109px 72px 52px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      grid-template-columns: 398px auto;
      grid-template-rows: min-content min-content min-content;
      column-gap: 108px;
      padding: 52px 126px 36px 128px;
      margin-bottom: 130px;
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

    ${theme.responsive.isTabletUp &&
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
      font-size: 14px;
      margin: 0 auto 8px;
    `}

    ${theme.responsive.isTablet &&
    css`
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      font-size: 16px;
      margin: 0 auto 39px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      font-size: 18px;
      margin: 0 auto 30px;
    `}
  `}
`;

export const StylizedBtn = styled.div`
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
        padding: 9px 10px;
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
        font-size: 18px;
        padding: 14px 22px;
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
  `}

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      grid-column: 2/3;
      grid-row: 1/4;
      height: 368px;
    `}
  `}

  ${({ theme }) => css`
    ${theme.responsive.isTabletUp &&
    css`
      grid-column: 2/3;
      grid-row: 1/4;
      height: 391px;
    `}
  `}

  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      grid-column: 2/3;
      grid-row: 1/4;
      display: flex;
      align-items: center;
      height: 398px;
    `}
  `}
`;

const photoStyles = css`
  position: absolute;
  width: 140px;
  height: 100px;
  object-fit: cover;

  ${({ theme }) => css`
    ${theme.responsive.isMobile && css``}

    ${theme.responsive.isTablet &&
    css`
      width: 180px;
      height: 120px;
    `}

  ${theme.responsive.isDesktop &&
    css`
      /* animation: ${Animation.rotateAnimation} 2s linear forwards; */
      width: 342px;
      height: 232px;
    `}
  `};
`;

export const PhotoOne = styled.img`
  ${photoStyles};

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      top: 30px;
      left: 20px;
      transform: rotate(-50deg);
      z-index: 2;
    `}

    ${theme.responsive.isTablet &&
    css`
      top: 48px;
      left: 12px;
      transform: rotate(-50deg);
      z-index: 2;
    `}

    ${theme.responsive.isTabletUp &&
    css`
      top: 48px;
      left: 12px;
      transform: rotate(-60deg);
      z-index: 2;
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 85px;
      left: 0;
      transform: rotate(-110deg);
      /* opacity: 0;
      visibility: hidden; */
      animation: ${Animation.rotateAnimation} 2s linear forwards;
      z-index: 4;

      /* &.animate {
        animation: ${Animation.rotateAnimation} 2s linear forwards;
      } */
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

    ${theme.responsive.isTabletUp &&
    css`
      bottom: 46px;
      right: 84px;
      transform: rotate(30deg);
    `}

    ${theme.responsive.isDesktop &&
    css`
      top: 76px;
      left: 238px;
      transform: rotate(30deg);
      /* opacity: 0;
      visibility: hidden; */
      animation: ${Animation.rotateAnimationTwo} 2s linear forwards;
      animation-delay: 1.5s;
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
      bottom: 50px;
      left: 11px;
      transform: rotate(-30deg);
    `}

    ${theme.responsive.isTabletUp &&
    css`
      bottom: 82px;
      left: 0;
      transform: rotate(-30deg);
    `}

    ${theme.responsive.isDesktop &&
    css`
      bottom: 56px;
      left: 500px;
      transform: rotate(-34deg);
      animation: ${Animation.rotateAnimationThree} 2s linear forwards;
      animation-delay: 3s;
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
      top: 18px;
      right: 14px;
      width: 120px;
      height: 180px;
      transform: rotate(17deg);
    `}

    ${theme.responsive.isTabletUp &&
    css`
      top: 62px;
      right: 32px;
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
    `}
  `}
`;

export const Wrapper = styled.div`
  max-width: 1830px;
`;
