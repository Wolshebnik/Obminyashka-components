import styled, { css } from 'styled-components';

import { Images } from 'components';

export const BurgerIcon = styled.div`
  position: relative;
  cursor: pointer;

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      top: 26px;
      right: 15px;
      width: 30px;
      height: 30px;
      z-index: 1;
    `}

    ${theme.responsive.isTablet &&
    css`
      top: 23px;
      right: 40px;
      width: 40px;
      height: 40px;
    `}
  `}
`;

const Line = css`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.btnBlue};
  border-radius: 15px;
  transform-origin: 1px;
  transition: all 0.3s linear;
`;

export const BurgerIconLines = styled.div<{ isOpen?: boolean }>`
  position: relative;
  top: 10px;

  ${({ theme, isOpen }) => css`
    ${Line};
    background-color: ${isOpen ? 'transparent' : theme.colors.btnBlue};

    ::after,
    ::before {
      content: '';
      position: absolute;
      ${Line};
      height: 3px;
    }

    ${theme.responsive.isMobile &&
    css`
      ::before {
        top: -10px;
        transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
      }

      ::after {
        bottom: -10px;
        transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    `}

    ${theme.responsive.isTablet &&
    css`
      ::before {
        top: -13px;
        transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
      }

      ::after {
        bottom: -13px;
        transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    `}
  `}
`;

export const BurgerMenu = styled.div<{
  isOpen?: boolean;
  isAnimation?: boolean;
}>`
  position: absolute;
  left: 0;
  top: -100%;
  width: 100%;
  transition: all 0.6s ease-in-out;

  ${({ theme, isAnimation }) => css`
    background-color: ${theme.colors.white};

    ${isAnimation &&
    css`
      top: 0;
    `}

    ${theme.responsive.isMobile &&
    css`
      gap: 56px;
      width: 100%;
      padding-top: 124px;
      padding-bottom: 188px;

      ::after {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        max-width: 200px;
        width: 100%;
        max-height: 240px;
        height: 100%;
        background-image: url(${Images.newBgBurgerOne});
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.6;
      }

      ::before {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        right: 0;
        max-width: 300px;
        width: 100%;
        max-height: 285px;
        height: 100%;
        background-image: url(${Images.newBgBurgerTwo});
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.7;
      }
    `}

    ${theme.responsive.isTablet &&
    css`
      padding-top: 120px;
      padding-bottom: 204px;
      ${isAnimation &&
      css`
        top: 85px;
      `}
    `}
  `};
`;

export const BurgerMenuClose = styled.div`
  position: absolute;
  display: flex;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;

  svg {
    width: 100%;
    height: 100%;

    path {
      ${({ theme }) => css`
        fill: ${theme.colors.btnBlue};
      `}
    }
  }
`;

export const BurgerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  width: 100%;
  z-index: 1;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      gap: 40px;
    `}
  `}
`;
