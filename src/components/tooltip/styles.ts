import styled, { css } from 'styled-components';

import { Cursor, ITooltipProps } from './types';

export const EllipsisText = styled.div<{ cursor: Cursor }>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: ${({ cursor }) => cursor};
`;

export const Tooltip = styled.div<ITooltipProps>`
  position: absolute;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  z-index: 10;
  cursor: context-menu;

  ${({ theme, widthTooltip }) => css`
    width: ${widthTooltip}px;
    background-color: ${theme.colors.white};
    color: ${theme.colors.blackColorText};
    box-shadow: ${theme.colors.ellipsisShadow};
  `}

  ${({ position, widthEl, heightEl }) => {
    switch (position) {
      case 'right':
        return css`
          left: ${widthEl + 8}px;
        `;
      case 'left':
        return css`
          right: ${widthEl + 8}px;
        `;
      case 'top':
        return css`
          bottom: ${heightEl + 8}px;
        `;
      case 'bottom':
        return css`
          top: ${heightEl + 8}px;
        `;
      default:
        return '';
    }
  }}
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  padding: 150px;
  max-width: 450px;
`;
