import styled, { css } from 'styled-components';
import { IStyledButtonNew } from './types';

export const Button = styled.button<IStyledButtonNew>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 63px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  @keyframes background-green-animation {
    0% {
      background-position: 0px 0;
    }
    100% {
      background-position: 290px 0;
    }
  }

  ${({ width, theme, colorType, animated, disabled, hover, height }) =>
    css`
      width: ${width}px;
      height: ${height}px;
      color: ${theme.colors.newButton.text};
      background: ${theme.colors.newButton[colorType].bg};
      cursor: ${disabled ? 'auto' : 'pointer'};

      &:hover {
        ${!disabled &&
        !animated &&
        hover &&
        `background: ${theme.colors.newButton[colorType].bgHover} `}
      }

      ${animated
        ? css`
            background: ${disabled
              ? theme.colors.newButton[colorType].animated.bgDisabled
              : theme.colors.newButton[colorType].animated.bg};
            animation-name: background-green-animation;
            animation-duration: 1500ms;
            animation-timing-function: linear;
            animation-iteration-count: infinite;

            @keyframes background-green-animation {
              0% {
                background-position: 0px 0;
              }
              100% {
                background-position: ${width}px 0;
              }
            }

            &:hover {
              ${!disabled &&
              hover &&
              `background: ${theme.colors.newButton[colorType].animated.bgHover} `}
            }
          `
        : css`
            background: ${disabled
              ? theme.colors.newButton[colorType].bgDisabled
              : theme.colors.newButton[colorType].bg};

            &:hover {
              ${!disabled &&
              `background: ${theme.colors.newButton[colorType].bgHover} `}
            }
          `};
    `}
`;

export const WrapIcon = styled.span``;
