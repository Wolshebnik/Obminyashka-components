import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const sun = keyframes`
  0% {
  }
  100% {
    transform: scale(5);
    visibility: visible; 
  }
  `;

const mainSunDisplaced = keyframes`
  0% {
  }
  100% {
    top: -65px;
    left: -75px;
    transform: scale(1);
    visibility: visible;
  }
  `;

const mainSunMouve = keyframes`
    0% {
      transform: scale(1) translate(0,0);
    }
    36% {
      transform: scale(1) translate(0,-3px);
    }
    66% {
      transform: scale(1) translate(3px,-3px);;
    }
    100% {
      transform: scale(1) translate(0,0);
    }
    `;

const sunMouve = keyframes`
  0% {
    visibility: visible;
    transform: scale(5) translate(0,0);
  }
  33% {
    visibility: visible;
    transform: scale(5) translate(0,-1px);
  }
  66% {
    visibility: visible;
    transform: scale(5) translate(1px,-1px);
  }
  100% {
    visibility: visible;
    transform:  scale(5)  translate(0,0);
  }
`;

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
      padding: 0 200px;
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
      padding: 16px 40px 95px;
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
      grid-template-columns: repeat(4, 1fr);
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

  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      width: 200px;
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
  transition: all 0.33s;

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
      background: transparent;

      ${NavbarLinkContainer}:hover & {
        border: 3px dashed #53b3d4;
        background: radial-gradient(
          50% 50% at 50% 50%,
          #6fe5ff 22.42%,
          #d9f6fd 87.89%
        );
        transform: scale(1.031.3);
        transition: transform 0.3s;
      }
    `}
  `}
`;

export const SunMain = styled.img`
  position: absolute;
  top: -30px;
  left: -200px;
  pointer-events: none;
  z-index: -1;
  animation: ${mainSunMouve} 1s ease-in-out infinite;

  ${NavbarLinkContainer}:hover & {
    animation: ${mainSunDisplaced} 0.5s forwards;
  }
`;

export const SunCateory = styled.img<{
  variant: string;
  visible: boolean;
}>`
  position: absolute;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  visibility: hidden;
  z-index: -1;

  ${({ variant, visible, theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      ${NavbarLinkContainer}:hover & {
        animation: ${sun} 0.3s forwards,
          ${sunMouve} 1s 0.5s ease-in-out infinite;
      }

      ${variant === 'clothes' &&
      visible &&
      css`
        ${NavbarLinkContainer}:hover & {
          transition-delay: 0.5s;
        }
      `}

      ${!visible &&
      css`
        ${variant === 'clothes' &&
        css`
          top: -10px;
          left: -10px;
        `}

        ${variant === 'shoes' &&
        css`
          top: -10px;
          left: 170px;
        `}

        ${variant === 'toys' &&
        css`
          top: -5px;
          left: 175px;
        `}

        ${variant === 'transport for children' &&
        css`
          top: 55px;
          left: 200px;
        `} 
        
        ${variant === 'furniture' &&
        css`
          top: 115px;
          left: -35px;
        `} 
        
        ${variant === 'kids up to year' &&
        css`
          top: -5px;
          left: 180px;
        `}

        ${variant === 'books' &&
        css`
          top: 165px;
          left: 178px;
        `}

        ${variant === 'other' &&
        css`
          top: 65px;
          left: -40px;
        `}
      `}
    `}
  `}
`;

export const Img = styled.img`
  box-sizing: border-box;
  display: block;
  width: 64px;
  height: 64px;
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
      /* width: 264px; */
      margin-top: 24px;
      font-size: 22px;
      text-align: center;
      line-height: 26px;

      ${NavbarLinkContainer}:hover & {
        font-size: 28px;
        color: #0666ab;
      }
    `}
  `}
`;
