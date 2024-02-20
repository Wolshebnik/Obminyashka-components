import styled, { css } from 'styled-components';

import { newBgBurgerOne, newBgBurgerTwo } from '../img';

export const BurgerIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
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

  ${({ theme, isOpen }) => css`
    ${Line};
    background-color: ${isOpen ? 'transparent' : theme.colors.btnBlue};

    ::after,
    ::before {
      content: '';
      position: absolute;
      ${Line};
    }

    ::before {
      top: -10px;
      left: ${isOpen ? '4px' : 0};
      transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    ::after {
      bottom: -10px;
      left: ${isOpen ? '4px' : 0};
      transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    ${theme.responsive.isTablet &&
    css`
      ::before {
        top: -13px;
        left: ${isOpen ? '6px' : 0};
      }

      ::after {
        bottom: -13px;
        left: ${isOpen ? '6px' : 0};
      }
    `}
  `}
`;

export const BurgerMenu = styled.div<{
  isOpen?: boolean;
  isAnimation?: boolean;
}>`
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  padding-top: 124px;
  padding-bottom: 188px;
  width: 100%;
  transition: all 0.6s ease-in-out;

  ::before,
  ::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
  }

  ::after {
    top: 0;
    left: 0;
    max-width: 200px;
    max-height: 240px;
    background-image: url(${newBgBurgerOne});
  }

  ::before {
    bottom: 0;
    right: 0;
    max-width: 300px;
    max-height: 285px;
    background-image: url(${newBgBurgerTwo});
  }

  ${({ theme, isAnimation }) => css`
    background-color: ${theme.colors.white};

    ${isAnimation &&
    css`
      top: 0;
    `}

    ${theme.responsive.isTablet &&
    css`
      padding-top: 120px;
      padding-bottom: 204px;

      ::before,
      ::after {
        background-image: none;
      }
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
  cursor: pointer;

  &:hover {
    svg {
      transform: rotate(90deg);
    }
  }

  svg {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;

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
