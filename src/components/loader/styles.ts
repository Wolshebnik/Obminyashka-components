import styled, { css, keyframes } from 'styled-components';

import { IStyledLoader } from './types';

const animation = keyframes`
  0% {
    top: 24px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 49px;
    opacity: 0;
  }
`;

const linearAnimation = keyframes`
   0% {
        left: -60px;
    }
    100% {
        left: 280px;
    }
`;

export const styleSet = css`
  position: absolute;
  border: 4px solid ${({ theme }) => theme.colors.white};
  opacity: 1;
  border-radius: 50%;
  animation: 1s ${animation} infinite;
`;

export const Wrapper = styled.div<IStyledLoader>`
  ${({ styleType }) => css`
    ${styleType === 'default' &&
    css`
      display: inline-block;
      position: relative;
      width: 80px;
      height: 49px;
    `}

    ${styleType === 'secondary' &&
    css`
      position: absolute;
      top: 0;
      height: 80px;
      width: 50px;
      background: linear-gradient(
        ${({ theme }) => theme.colors.buttonGradient}
      );
      transform: skewX(-45deg);
      animation: 0.8s ${linearAnimation} infinite linear;
    `}
  `}
`;

export const FirstDiv = styled.div<IStyledLoader>`
  ${({ styleType }) => css`
    ${styleType === 'default' &&
    css`
      ${styleSet};
    `}

    ${styleType === 'secondary' &&
    css`
      display: none;
    `}
  `}
`;

export const SecondDiv = styled.div<IStyledLoader>`
  ${({ styleType }) => css`
    ${styleType === 'default' &&
    css`
      ${styleSet};
      animation-delay: -0.5s;
    `}

    ${styleType === 'secondary' &&
    css`
      display: none;
    `}
  `}
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  background: ${({ theme }) => theme.colors.btnBlue};
  border-radius: 25px;
`;
