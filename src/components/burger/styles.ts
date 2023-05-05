import styled, { css } from 'styled-components';

import { IBurger } from './types';

export const BurgerMenu = styled.div`
  position: fixed;
  /* display: flex;
  justify-content: space-around;
  flex-flow: column nowrap; */
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

//How can I write theme in this?//
export const BurgerMenuLines = styled.div<IBurger>`
  ${Line};
  position: relative;
  top: 10px;
  background-color: ${({ isOpen, theme }) =>
    isOpen ? 'transparent' : theme.colors.btnBlue};

  ::after,
  ::before {
    content: '';
    ${Line};
    position: absolute;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 1)};
  }

  ::before {
    top: -10px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  ::after {
    bottom: -10px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  /* :nth-child(1) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  :nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  :nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  } */
`;
