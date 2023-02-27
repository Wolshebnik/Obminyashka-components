import styled, { css } from 'styled-components';

import { IStyledButton } from './types';

export const Button = styled.button<IStyledButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-size: 16px;
  border: 0;
  transition: background-color 0.3s ease;
  cursor: pointer;
  outline: none;
  overflow: hidden;

  ${({
    gap,
    bold,
    width,
    theme,
    height,
    lHeight,
    isRotate,
    colorType,
    nativeIcon,
    outsideText,
  }) => css`
    gap: ${gap || 10}px;
    width: ${width}px;
    height: ${height || 50}px;
    padding: ${outsideText ? '0' : '0 22px'};
    color: ${theme.colors.white};
    font-weight: ${bold ? 'bold' : 'normal'};
    line-height: ${lHeight || 20}px;
    text-transform: ${outsideText ? 'inherit' : 'uppercase'};
    background-color: ${theme.colors.button[colorType].bg};
    border-radius: ${outsideText ? '50%' : '25px'};

    &:hover {
      background-color: ${theme.colors.button[colorType].hover};

      > span > svg {
        path {
          transition: all 0.3s ease;
          fill: ${nativeIcon ? null : theme.colors.white};
        }
      }
    }

    &:active {
      background-color: ${theme.colors.button[colorType].active};
    }

    &:disabled {
      background-color: ${theme.colors.button[colorType].disable};
      cursor: default;
    }

    ${outsideText &&
    css`
      > span > svg {
        width: 14px;
        height: 14px;
      }

      ${isRotate && `transform: rotate(45deg);`}
    `}
  `}
`;

export const WrapIcon = styled.span<{ orderRight?: boolean }>`
  display: flex;
  order: ${({ orderRight }) => (orderRight ? 1 : 0)};

  & > svg {
    height: 24px;
    width: 24px;
  }
`;

export const WrapperAddDel = styled.div<{ gap?: number }>`
  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    font-weight: 400;
  }

  ${({ gap }) => gap && `gap: ${gap}px;`}
`;
