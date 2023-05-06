import styled, { css } from 'styled-components';

import { IBurger } from './types';

export const BurgerIcon = styled.div`
  position: fixed;
  cursor: pointer;

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      top: 26px;
      right: 15px;
      width: 30px;
      height: 30px;
    `}

    ${theme.responsive.isTablet &&
    css`
      top: 23px;
      right: 40px;
      width: 40px;
      height: 40px;
    `} 

    ${theme.responsive.isDesktop &&
    css`
      display: none;
    `}
  `}
`;

const Line = css`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.btnBlue};
  border-radius: 15px;
  transform-origin: 1px;
  transition: all 0.3s linear;
`;

export const BurgerIconLines = styled.div<IBurger>`
  ${Line};
  position: relative;
  top: 10px;

  ${({ theme, isOpen }) => css`
    background-color: ${isOpen ? 'transparent' : theme.colors.btnBlue};

    ::after,
    ::before {
      content: '';
      position: absolute;
      ${Line};
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

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};

    ${theme.responsive.isMobile &&
    css`
      gap: 56px;
      width: 100%;
      padding-top: 124px;
      padding-bottom: 188px;
    `}

    ${theme.responsive.isTablet &&
    css`
      gap: 40px;
      padding-top: 120px;
      padding-bottom: 204px;
    `}
  `}
`;
