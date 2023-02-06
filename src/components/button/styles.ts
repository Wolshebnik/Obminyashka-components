import styled, { css } from 'styled-components';

import { ColorType, IStyledButton } from './types';
import { button } from './helper';

export const StyledButton = styled.button<IStyledButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 49px;
  color: #fdf9ff;
  font-style: normal;
  font-size: 16px;
  text-transform: uppercase;
  border: 0;
  border-radius: 25px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  outline: none;

  ${({ width, bold, theme, lHeight, colorType }) => css`
    width: ${width};
    font-weight: ${bold ? 'bold' : 'normal'};
    background-color: ${button[colorType].bg};
    line-height: ${lHeight || '20px'};

    &:hover {
      background-color: ${button[colorType].hover};
      > span > svg {
        path {
          transition: all 0.3s ease;
          fill: white;
        }
      }
    }

    &:active {
      background-color: ${button[colorType].active};
    }

    &:disabled {
      background-color: ${button[colorType].disable};
      cursor: default;
    }
  `}
`;

export const WrapIcon = styled.span<{ orderRight?: boolean }>`
  line-height: 0;
  margin-left: 8px;
  order: ${({orderRight}) => (orderRight ? 1 : 0)};
  flex-shrink: 0;
`;
