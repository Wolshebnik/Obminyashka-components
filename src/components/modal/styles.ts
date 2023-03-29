import styled, { css, keyframes } from 'styled-components';

import { IStyles } from './types';

const continueMoveDown = keyframes`
 0% {
   opacity: 1;
   transform: translateY(0vh);
  }

  100% {
    opacity: 0;
    transform: translateY(100vh);
  }
`;

const moveDown = keyframes`
 0% {
   opacity: 0;
  }

  5% {
    transform: translateY(-100vh);
  }

  100% {
    opacity: 1;
    transform: translateY(0vh);
  }
`;

export const Overlay = styled.div<IStyles>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  transition-delay: 200;

  ${({ theme }) => css`
    background-color: ${theme.colors.modalColors.background};
  `};
`;

export const ModalWindow = styled.div<IStyles>`
  position: relative;
  box-sizing: border-box;
  max-width: 600px;
  max-height: 80%;
  box-shadow: rgba(18, 182, 237, 0.3) 0px 3px 10px -0.5px;
  border-radius: 3px;
  z-index: 30;

  ${({ closing, duration }) => css`
    animation: ${closing ? continueMoveDown : moveDown} ${duration}ms;
  `};
`;

export const ButtonClose = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  top: -15px;
  right: -15px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  transition-delay: 0.1s;

  ${({ theme }) => css`
    background-color: ${theme.colors.modalColors.crossBtnBackground};

    &:after,
    &:before {
      position: absolute;
      top: 7px;
      content: '';
      width: 2px;
      height: 15px;
      transform: rotate(45deg);
      background-color: ${theme.colors.white};
    }
  `}

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    transform: rotate(180deg);
  }
`;
