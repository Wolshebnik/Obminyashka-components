import styled, { css } from 'styled-components';

import { Cursor, IStyledProps, ITooltipProps } from './types';

export const EllipsisText = styled.div<{ cursor: Cursor }>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: ${({ cursor }) => cursor};
  z-index: 0;
`;

export const Wrapper = styled.div<ITooltipProps>`
  position: relative;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  width: 100%;
`;

export const Tooltip = styled.div<IStyledProps>`
  position: absolute;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  overflow-x: auto;
  cursor: context-menu;
  z-index: 100;

  ${({ theme, widthTooltip, position, widthEl, heightEl, gap = 8 }) => css`
    width: ${widthTooltip}px;
    background-color: ${theme.colors.white};
    color: ${theme.colors.blackColorText};
    box-shadow: ${theme.colors.ellipsisShadow};

    ${position === 'right' &&
    css`
      left: ${widthEl + gap}px;
    `}

    ${position === 'left' &&
    css`
      right: ${widthEl + gap}px;
    `}

    ${position === 'top' &&
    css`
      bottom: ${heightEl + gap}px;
    `}

    ${position === 'bottom' &&
    css`
      top: ${heightEl + gap}px;
    `}
  `}
`;

export const Container = styled.div`
  padding: 150px;
  max-width: 450px;
`;
