import { Tooltip } from 'react-tooltip';
import styled, { css } from 'styled-components';

import 'react-tooltip/dist/react-tooltip.css';

export const ReactTooltip = styled(Tooltip)`
  &.custom-tooltip {
    padding: 16px;
    max-width: 200px;
    border-radius: 8px;
    cursor: context-menu;

    ${({ theme }) => css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.blackColorText};
      box-shadow: ${theme.colors.ellipsisShadow};
    `}
  }
`;

export const EllipsisDiv = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  max-width: 150px;
  box-sizing: border-box;
`;
