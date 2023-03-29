import { Tooltip } from 'react-tooltip';
import styled, { css } from 'styled-components';

import { Cursor } from './types';
import { ITooltipProps } from './types';
import 'react-tooltip/dist/react-tooltip.css';

export const ReactTooltip = styled(Tooltip)<ITooltipProps>`
  &.custom-tooltip {
    padding: 16px;
    border-radius: 8px;
    opacity: 1;
    cursor: context-menu;

    ${({ width }) => css`
      max-width: ${width}px;
    `}

    ${({ theme }) => css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.blackColorText};
      box-shadow: ${theme.colors.ellipsisShadow};
    `}
  }
`;

export const EllipsisDiv = styled.div<{ cursor: Cursor }>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: ${({ cursor }) => cursor};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  max-width: 150px;
  box-sizing: border-box;
`;
