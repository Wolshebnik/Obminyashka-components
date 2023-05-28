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

  ${({ theme, colorType, animated, disabled, hover }) =>
    css`
      color: ${theme.colors.newButton.text};
      background: ${theme.colors.newButton[colorType].bg};
      cursor: ${disabled ? 'auto' : 'pointer'};

      ${colorType == 'green' &&
      css`
        ${theme.responsive.isDesktop &&
        `
          width: 290px;
          height: 50px;
        `}

        ${theme.responsive.isTablet &&
        `
          width: 286px;
          height: 40px;
        `}
      `}

      ${colorType == 'blue' &&
      css`
        width: 290px;
        height: 50px;
      `}

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
                background-position: 290px 0;
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
