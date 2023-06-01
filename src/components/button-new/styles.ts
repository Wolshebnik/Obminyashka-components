import styled, { css } from 'styled-components';
import { IStyledButtonNew } from './types';

export const Button = styled.button<IStyledButtonNew>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 286px;
  height: 40px;
  border-radius: 63px;
  font-family: Roboto;
  font-style: normal;

  @keyframes background-green-animation {
    0% {
      background-position: 0px 0;
    }
    100% {
      background-position: 290px 0;
    }
  }

  ${({ theme, colorType, animated, styleType }) => {
    const styleTheme = theme.colors.newButton[styleType][colorType];

    return css`
      ${
        styleType === 'default' &&
        css`
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
          border: none;
          color: ${styleTheme.text};
          background: ${styleTheme.bg};
        `
      }

      ${
        styleType === 'outline' &&
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
        `
      }

      ${
        colorType == 'green' &&
        theme.responsive.isDesktop &&
        css`
          width: 290px;
          height: 50px;
          font-size: 20px;
        `
      }
      }

      ${
        colorType == 'blue' &&
        css`
          width: 290px;
          height: 50px;
        `
      }

      &:hover:not(:disabled) {
        ${
          !animated &&
          css`
            background: ${styleTheme.bgHover};
          `
        }
      }

      ${
        animated
          ? css`

              background: ${styleTheme.animated.bg};
              animation-name: background-green-animation;
              animation-duration: 1500ms;
              animation-timing-function: linear;
              animation-iteration-count: infinite;

              &:disabled {
                background: ${styleTheme.animated.bgDisabled};
                cursor: auto;
              }

              @keyframes background-green-animation {
                0% {
                  background-position: 0px 0;
                }
                100% {
                  background-position: 286px 0;

                  ${
                    colorType == 'green' &&
                    theme.responsive.isDesktop &&
                    css`
                      background-position: 290px 0;
                    `
                  }
                  }
                }
              }

              &:hover:not(:disabled) {

                background: ${styleTheme.animated.bgHover}
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
            `
      };
    `;
  }}
`;

export const Text = styled.span`
  text-transform: uppercase;
`;
