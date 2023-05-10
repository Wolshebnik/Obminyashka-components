import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const sun = keyframes`
  0% {
  }
  100% {
    width: 145px;
    height: 145px;
    top: -70px;
    left: -80px;
    visibility: visible; 
  }
`;

const circle = keyframes`
  0% {
    width: 120px;
    height: 120px;
  }
  100% {
    width: 165px;
    height: 165px;
  }
`;

// const mainSun = keyframes`
// 0% {
//   visibility: hidden;
// }
// 100% {
//   width: 145px;
//   height: 145px;
//   top: -90px;
//   left: -120px;
//   visibility: visible;
// }
// `;

export const List = styled.div`
  position: fixed;
  background: linear-gradient(162.46deg, #97d7e3 0%, #53b2d4 100%);
  width: 100vw;
  left: 0;
  top: 82px;
  z-index: -1;

  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      padding: 0 280px;
    `}
  `}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 22px;

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      max-width: 400px;
      margin-inline: auto;
      padding 16px 40px 95px;
    `}

    ${theme.responsive.isTablet &&
    css`
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 46px;
      padding: 50px 0 128px;
      max-width: 687px;
      margin-inline: auto;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 165px;
      grid-row-gap: 65px;
      padding: 94px 0 163px;
      max-width: 926px;
      margin-inline: auto;
    `}

    ${theme.responsive.isDesktop &&
    css`
      grid-template-columns: repeat(4, 165px);
      grid-row-gap: 109px;
      justify-content: space-between;
      padding: 136px 0 270px;
      max-width: 1500px;
      margin-inline: auto;
    `}
  `}
`;

export const NavbarLinkContainer = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
`;

export const SunMain = styled.img`
  position: absolute;
  width: 145px;
  height: 145px;
  top: -30px;
  left: -200px;
  pointer-events: none;
  z-index: -1;

  ${NavbarLinkContainer}:hover & {
    animation: ${sun} 0.5s forwards;
  }
`;

export const SunCateory = styled.img<{ clothes?: string; visible: boolean }>`
  position: absolute;
  box-sizing: border-box;
  /* width: 30px;
  height: 30px;
  top: -20px;
  left: -20px; */
  visibility: hidden;
  z-index: -1;

  ${({ clothes, visible }) => css`
    ${clothes &&
    css`
      width: 145px;
      height: 145px;
      top: -70px;
      left: -80px;

      ${NavbarLinkContainer}:hover & {
        animation: ${sun} 0.3s 0.5s forwards;
      }
    `}

    ${!visible &&
    css`
      width: 30px;
      height: 30px;
      top: -20px;
      left: -20px;

      ${NavbarLinkContainer}:hover & {
        animation: ${sun} 0.3s forwards;
      }
    `}
  `}
`;

export const NavbarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #6fe5ff 22.42%,
    #d9f6fd 87.89%
  );
  border: 3px dashed #53b3d4;
  border-radius: 50%;
  margin-inline: auto;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 95px;
      height: 95px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      width: 130px;
      height: 130px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 165px;
      height: 165px;
      border: 3px transparent;
      background: none;

      ${NavbarLinkContainer}:hover & {
        border: 3px dashed #53b3d4;
        background: radial-gradient(
          50% 50% at 50% 50%,
          #6fe5ff 22.42%,
          #d9f6fd 87.89%
        );
        animation: ${circle} 0.1s;
      }
    `}
  `}
`;

export const Img = styled.img`
  box-sizing: border-box;
  display: block;
  margin-inline: auto;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 70px;
      height: 70px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      width: 90px;
      height: 90px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 120px;
      height: 120px;
      padding: 14px;

      ${NavbarLinkContainer}:hover & {
        width: 160px;
        height: 160px;
      }
    `}
  `}
`;

export const Span = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;

  ${({ theme }) => css`
    color: ${theme.colors.white};

    ${theme.responsive.isTablet &&
    css`
      margin-top: 17px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-top: 24px;
      font-size: 22px;
      line-height: 26px;

      ${NavbarLinkContainer}:hover & {
        font-size: 28px;
        color: #0666ab;
      }
    `}
  `}
`;
