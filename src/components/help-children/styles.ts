import styled, { css } from 'styled-components';

import * as Animation from './animation';

export const Wrapper = styled.div`
  max-width: 1830px;
`;

export const HelpChildren = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 55px min-content 280px 80px;
  padding: 59px 0 82px;
  width: 100%;
  border-radius: 130px;

  ${({ theme }) => css`
    background: ${theme.colors.helpChildren.bg};

    ${theme.responsive.isMobile &&
    css`
      justify-items: center;
    `}

    ${theme.responsive.isTablet &&
    css`
      grid-template-columns: 400px 1fr;
      grid-template-rows: 70px min-content 51px;
      padding: 42px 52px 86px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      grid-template-columns: 600px 1fr;
      grid-template-rows: 80px min-content 51px;
      padding: 42px 110px 86px 52px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      grid-template-columns: 400px 1fr;
      grid-template-rows: 80px min-content 51px;
      height: 516px;
    `}

    ${theme.responsive.isDesktopXS &&
    css`
      padding: 58px 89px 58px 108px;
    `}

    ${theme.responsive.isDesktopMD &&
    css`
      padding: 58px 122px 58px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      padding: 58px 133px 58px 138px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      padding: 58px 128px 58px;
    `}
  `}
`;

export const TitleWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 1;
`;

export const Text = styled.p`
  margin: 0 60px 22px;
  font-size: 14px;
  line-height: 23px;
  font-family: 'Proxima Nova', sans-serif;

  ${({ theme }) => css`
    color: ${theme.colors.blackColorText};

    ${theme.responsive.isTablet &&
    css`
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      margin: 0 auto 39px;
      font-size: 16px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin: 0 0 30px;
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
        padding: 9px 15px;
        font-size: 14px;
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
      height: 372px;
      width: 370px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      grid-column: 2/3;
      grid-row: 1/4;
      justify-self: flex-end;
      height: 391px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      grid-column: 2/3;
      grid-row: 1/4;
      justify-self: flex-end;
      height: 400px;
    `}

    ${theme.responsive.isDesktopXS &&
    css`
      width: 739px;
    `}


    ${theme.responsive.isDesktopMD &&
    css`
      width: 823px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      width: 979px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      width: 1075px;
    `}
  `}
`;

const photoStyles = css`
  position: absolute;
  width: 140px;
  height: 100px;
  object-fit: cover;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 180px;
      height: 120px;
    `}

    ${theme.responsive.isDesktopXS &&
    css`
      width: 220px;
      height: 150px;
    `}

    ${theme.responsive.isDesktopMD &&
    css`
      width: 284px;
      height: 193px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      width: 310px;
      height: 220px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      width: 342px;
      height: 232px;
    `}
  `};
`;

export const PhotoOne = styled.img`
  ${photoStyles};
  top: 30px;
  left: 20px;
  transform: rotate(-50deg);
  z-index: 2;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 69px;
      left: 17px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 53px;
      left: -5px;
      transform: rotate(-60deg);
    `}

    ${theme.responsive.isDesktop &&
    css`
      transform: rotate(-110deg);
      animation: ${Animation.rotateAnimation} 1.5s linear forwards;
      z-index: 3;
    `}

    ${theme.responsive.isDesktopXS &&
    css`
      top: 132px;
      left: 88px;
    `}

    ${theme.responsive.isDesktopMD &&
    css`
      top: 82px;
      left: 0;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: 100px;
      left: 15px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      top: 86px;
      left: -5px;
    `}
  `}
`;

export const PhotoTwo = styled.img`
  ${photoStyles};
  bottom: 30px;
  right: 4px;
  transform: rotate(30deg);

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      right: 20px;
      bottom: 37px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      bottom: 35px;
      right: 60px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      animation: ${Animation.rotateAnimationTwo} 1.5s linear forwards;
      animation-delay: 1.5s;
      opacity: 0;
      z-index: 2;
    `}

    ${theme.responsive.isDesktopXS &&
    css`
      top: 123px;
      left: 224px;
    `}

    ${theme.responsive.isDesktopMD &&
    css`
      top: 77px;
      left: 159px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: 100px;
      left: 250px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      top: 84px;
      left: 248px;
    `}
  `}
`;

export const PhotoThree = styled.img`
  ${photoStyles};
  right: 145px;
  bottom: 43px;
  transform: rotate(-30deg);

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      left: 17px;
      bottom: 28px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      left: -22px;
      bottom: 73px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      transform: rotate(-34deg);
      animation: ${Animation.rotateAnimationThree} 1.5s linear forwards;
      animation-delay: 3s;
      opacity: 0;
      z-index: 1;
    `}

    ${theme.responsive.isDesktopXS &&
    css`
      bottom: 117px;
      left: 392px;
    `}

    ${theme.responsive.isDesktopMD &&
    css`
      bottom: 123px;
      right: 190px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      bottom: 95px;
      right: 220px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      bottom: 47px;
      right: 220px;
    `}
  `}
`;

export const PhotoFour = styled.img`
  ${photoStyles};
  top: 14px;
  right: 8px;
  width: 100px;
  height: 140px;
  transform: rotate(17deg);

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      top: 50px;
      right: 25px;
      width: 120px;
      height: 180px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      top: 67px;
      right: 20px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      transform: rotate(17deg);
      animation: ${Animation.rotateAnimationFour} 1.5s linear forwards;
      animation-delay: 4.5s;
      opacity: 0;
      z-index: 3;
    `}

    ${theme.responsive.isDesktopXS &&
    css`
      top: 87px;
      right: 30px;
      width: 150px;
      height: 220px;
    `}

    ${theme.responsive.isDesktopMD &&
    css`
      top: 54px;
      right: 38px;
      width: 193px;
      height: 284px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      top: 54px;
      right: 42px;
      width: 220px;
      height: 310px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      top: 37px;
      right: 42px;
      width: 232px;
      height: 342px;
    `}
  `}
`;
