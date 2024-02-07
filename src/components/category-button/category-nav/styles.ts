import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import { IList, ISunCategory } from './types';

const open = keyframes`
  0% {
    top: -550%;
  }

  100% {
    top: 130px;
  }
`;

const close = keyframes`
  0% {
    top: 130px;
  }

  100% {
    top: -550%;
  }
`;

const sunClose = keyframes`
  0% {
    transform: scale(5);
    visibility: visible;
  }

  100% {
    transform: scale(1);
    visibility: hidden;
  }
`;

const mainSunDisplaced = keyframes`
  100% {
    top: -70px;
    left: -110px;
    transform: scale(1);
    visibility: visible;
  }
`;

const mainSunMove = keyframes`
  0% {
    transform: scale(1) rotate(0) translate(0,0);
  }

  36% {
    transform: scale(1) rotate(-2deg) translate(0,-3px);
  }

  66% {
    transform: scale(1) rotate(5deg) translate(3px,-3px);
  }
  
  100% {
    transform: scale(1) rotate(0) translate(0,0);
  }
`;

const sunMove = keyframes`
  0% {
    visibility: visible;
    transform: scale(5) rotate(0) translate(0,0);
  }

  33% {
    visibility: visible;
    transform: scale(5) rotate(-2deg) translate(0,-1px);
  }

  66% {
    visibility: visible;
    transform: scale(5) rotate(5deg) translate(1px,-1px);
  }

  100% {
    visibility: visible;
    transform:  scale(5) rotate(0) translate(0,0);
  }
`;

const sun = keyframes`
  100% {
    transform: scale(5);
    visibility: visible;
  }
`;

const text = keyframes`
  100% {
    font-size: 28px;
  }
`;

export const List = styled.div<IList>`
  position: absolute;
  width: 100vw;
  left: 0;
  z-index: -1;

  ${({ theme, isOpen, delay }) => css`
    ${theme.responsive.isDesktop &&
    css`
      padding: 0 200px;
    `}

    ${isOpen &&
    css`
      animation: ${open} ${delay}ms ease-in-out forwards;
    `}

    ${!isOpen &&
    css`
      animation: ${close} ${delay}ms ease-in-out forwards;
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

export const NavbarLinkContainer = styled(Link)`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  cursor: pointer;

  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      width: 200px;
    `}
  `}
`;

export const NavbarLinkBody = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
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
      height: 165px;
    `}
  `}
`;

export const NavHover = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  z-index: -1;

  ${({ theme }) => css`
    background: radial-gradient(
      50% 50% at 50% 50%,
      ${theme.colors.navCategory.bgColorLinkOne} 22.42%,
      ${theme.colors.navCategory.bgColorLinkTwo} 87.89%
    );
    border: 3px dashed ${theme.colors.navCategory.linkBorder};

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
      width: 0;
      height: 0;
      visibility: hidden;
      transition: all 0.2s ease-in-out;

      ${NavbarLinkContainer}:hover & {
        width: 165px;
        height: 165px;
        visibility: visible;
      }
    `}
  `}
`;

export const SunMain = styled.img<{ variant: number }>`
  position: absolute;
  top: -20px;
  left: -260px;
  pointer-events: none;
  animation: ${mainSunMove} 2.5s linear infinite;
  z-index: -1;

  ${({ variant }) => css`
    ${NavbarLinkContainer}:hover & {
      ${variant === 0 &&
      css`
        animation: ${mainSunDisplaced} 0.5s forwards;
      `}
    }
  `}
`;

export const SunCategory = styled.img<ISunCategory>`
  position: absolute;
  width: 30px;
  height: 30px;
  visibility: hidden;
  z-index: -1;

  ${({ variant, visible, isLeave, theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      ${NavbarLinkContainer}:hover & {
        animation: ${sun} 0.5s forwards, ${sunMove} 2.5s 0.5s linear infinite;
      }

      ${variant === 0 &&
      visible &&
      css`
        ${NavbarLinkContainer}:hover & {
          transition-delay: 0.5s;
        }
      `}

      ${isLeave &&
      css`
        animation: ${sunClose} 0.1s;
      `}

      ${!visible &&
      css`
        ${variant === 0 &&
        css`
          top: -10px;
          left: -45px;
          /* left: -75px; */
        `}

        ${variant === 1 &&
        css`
          top: -10px;
          left: 125px;
          /* left: 110px; */
        `}
          
          ${variant === 2 &&
        css`
          top: 0;
          left: 130px;
        `}
          
          ${variant === 3 &&
        css`
          top: 55px;
          left: 165px;
        `} 
          
          ${variant === 4 &&
        css`
          top: 125px;
          left: -70px;
        `} 
          
          ${variant === 5 &&
        css`
          top: -5px;
          left: 140px;
        `}
          
          ${variant === 6 &&
        css`
          top: 165px;
          left: 140px;
        `}
          
          ${variant === 7 &&
        css`
          top: 65px;
          left: -80px;
        `}
      `}
    `}
  `}
`;

export const Img = styled.img`
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
      transition: all 0.3s;

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

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      font-size: 16px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-top: 24px;
      font-size: 22px;
      text-align: center;
      line-height: 26px;
      transition: all 0.2s;

      ${NavbarLinkContainer}:hover & {
        color: ${theme.colors.navCategory.colorHoveredText};
        animation: ${text} 0.2s linear forwards;
      }
    `}
  `}
`;
