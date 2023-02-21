import styled, { css } from 'styled-components';

import { IStyledButton } from './types';

export const StyledButton = styled.button<IStyledButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 22px;
  height: 49px;
  font-style: normal;
  font-size: 16px;
  text-transform: uppercase;
  border: 0;
  border-radius: 25px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  outline: none;
  overflow: hidden;

  ${({ theme, width, bold, lHeight, colorType, nativeIcon }) => css`
    width: ${width}px;
    color: ${theme.colors.white};
    font-weight: ${bold ? 'bold' : 'normal'};
    line-height: ${lHeight || 20}px;
    background-color: ${theme.colors.button[colorType].bg};

    &:hover {
      background-color: ${theme.colors.button[colorType].hover};

      > span > svg {
        path {
          transition: all 0.3s ease;
          fill: ${nativeIcon ? null : 'white'};
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
