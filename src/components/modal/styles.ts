import styled, { css, keyframes } from 'styled-components';

import { IStyles } from './types';

const moveAbove = keyframes`
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

export const ModalWindow = styled.div<IStyles>`
  position: relative;
  top: 50%;
  left: 50%;
  // box-sizing: border-box;
  max-width: 600px;
  max-height: 80%;
  box-shadow: rgba(18, 182, 237, 0.3) 0px 3px 10px -0.5px;
  transform: translate(-50%, -50%);

  ${({ closing, duration }) => css`
    animation: ${closing ? moveBelow : moveAbove} ${duration}ms linear;
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

export const ExtraWrapper = styled.div<{ withoutBg: boolean }>`
  padding: 30px;

  ${({ theme, withoutBg }) =>
    !withoutBg &&
    css`
      background-color: ${theme.colors.white};
      border-radius: 3px;
    `}
`;
