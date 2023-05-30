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
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  @keyframes background-green-animation {
    0% {
      background-position: 0px 0;
    }
    100% {
      background-position: 290px 0;
    }
  }

  ${({ theme, colorType, animated }) =>
    css`
      color: ${theme.colors.newButton.text};
      background: ${theme.colors.newButton[colorType].bg};


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
            background: ${theme.colors.newButton[colorType].bgHover};
          `
        }
      }

      ${
        animated
          ? css`

              background: ${theme.colors.newButton[colorType].animated.bg};
              animation-name: background-green-animation;
              animation-duration: 1500ms;
              animation-timing-function: linear;
              animation-iteration-count: infinite;

              &:disabled {
                background: ${
                  theme.colors.newButton[colorType].animated.bgDisabled
                };
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

                background: ${
                  theme.colors.newButton[colorType].animated.bgHover
                }
              }
            `
          : css`
              background: ${theme.colors.newButton[colorType].bg};

              &:disabled {
                background: ${theme.colors.newButton[colorType].bgDisabled};
                cursor: auto;
              }

              &:hover:not(:disabled) {
                background: ${theme.colors.newButton[colorType].bgHover};
              }
            `
      };
    `}
`;

export const Text = styled.span`
  text-transform: uppercase;
`;
