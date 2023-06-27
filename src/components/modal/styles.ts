import styled, { css, keyframes } from 'styled-components';

import { IModalWindow } from './types';

const moveDown = keyframes`
  from {
  top: -100%;
  }

  to {
  top: 50%;
  }
`;

const moveBelow = keyframes`
  from {
  top: 50%;
  }

  to {
  top: 200%;
  }
`;

export const ModalWindow = styled.div<IModalWindow>`
  position: relative;
  top: 50%;
  left: 50%;
  max-width: 600px;
  max-height: 80%;
  transform: translate(-50%, -50%);

  ${({ isCloseAnimation, duration }) => css`
    animation: ${isCloseAnimation ? moveDown : moveBelow} ${duration}ms linear;
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

export const ExtraWrapper = styled.div<{ withoutBg?: boolean }>`
  padding: 30px;

  ${({ theme, withoutBg }) =>
    !withoutBg &&
    css`
      background-color: ${theme.colors.white};
      border-radius: 3px;
      box-shadow: ${theme.colors.modalColors.boxShadow} 0px 3px 10px -0.5px;
    `}
`;
