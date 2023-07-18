import styled, { css, keyframes } from 'styled-components';

import { IStyledButtonNew } from './types';

const frame = keyframes`
  0% {
    background-position: 0px 0;
  }
  100% {
    background-position: 290px 0;
  }
`;

export const Button = styled.button<IStyledButtonNew>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  width: 100%;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  border-radius: 40px;
  border: none;

  ${({ theme, colorType, animated, styleType }) => {
    const styleTheme = theme.colors.newButton[styleType][colorType];

    return css`
      color: ${styleTheme.text};
      background: ${styleTheme.bg};

      ${styleType === 'outline' &&
      css`
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        border-radius: 63px;

        &:not(:disabled) {
          border: 2px solid ${styleTheme.outline};
          color: ${styleTheme.text};
        }
        &:disabled {
          border: 2px solid ${styleTheme.outlineDisabled};
          color: ${styleTheme.disabledText};
        }
      `}

      ${colorType === 'green' &&
      theme.responsive.isDesktop &&
      css`
        height: 50px;
        font-size: 18px;
        line-height: 24px;
      `}

      &:hover:not(:disabled) {
        ${!animated &&
        css`
          background: ${styleTheme.bgHover};
        `}
      }

      ${colorType === 'green' &&
      theme.responsive.isDesktopLG &&
      css`
        font-size: 18px;
        line-height: 24px;
      `}

      ${animated
        ? css`
            background: ${styleTheme.animated.bg};
            animation: ${frame};
            animation-duration: 1500ms;
            animation-timing-function: linear;
            animation-iteration-count: infinite;

            &:disabled {
              background: ${styleTheme.animated.bgDisabled};
              cursor: auto;
            }

            &:hover:not(:disabled) {
              background: ${styleTheme.animated.bgHover};
            }
          `
        : css`
            background: ${styleTheme.bg};

            &:disabled {
              background: ${styleTheme.bgDisabled};
              cursor: auto;
            }

            &:hover:not(:disabled) {
              background: ${styleTheme.bgHover};
            }
          `};
    `;
  }}
`;

export const Text = styled.span`
  text-transform: uppercase;
`;
