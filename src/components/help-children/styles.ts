import styled, { css } from 'styled-components';

import * as Animation from './animation';

export const HelpChildren = styled.div`
  border-radius: 130px;

  ${({ theme }) => css`
    display: grid;
    background: ${theme.colors.helpChildren.bg};

    ${theme.responsive.isMobile &&
    css`
      grid-template-columns: 1fr;
      justify-items: center;
      padding: 59px 60px 82px;
      margin-bottom: 50px;
    `}

    ${theme.responsive.isTablet &&
    css`
      grid-template-columns: 395px auto;
      grid-template-rows: min-content min-content min-content;
      column-gap: 70px;
      padding: 42px 55px 72px 52px;
      margin-bottom: 70px;
    `}

    ${theme.responsive.isTabletUp &&
    css`
      grid-template-columns: 600px auto;
      grid-template-rows: min-content min-content min-content;
      column-gap: 106px;
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
        margin: 0 auto;
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
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      grid-column: 2/3;
      grid-row: 1/4;
    `}
  `}
`;

export const PhotoOne = styled.img`
  object-fit: cover;

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      animation: ${Animation.rotateAnimation} 2s linear ease-in-out;
      width: 100px;
      height: 140px;
    `}

    ${theme.responsive.isTablet &&
    css`
      width: 120px;
      height: 180px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 232px;
      height: 342px;
    `}
  `};
`;

export const PhotoTwo = styled(PhotoOne)``;

export const PhotoThree = styled(PhotoOne)``;

export const PhotoFour = styled(PhotoOne)``;

export const Wrapper = styled.div`
  max-width: 1251px;
`;
