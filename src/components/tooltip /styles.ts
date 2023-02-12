import styled, { css } from 'styled-components';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export const ReactTooltip = styled(Tooltip).attrs({
  className: 'custom-tooltip',
})`
  &.custom-tooltip {
    background-color: red;
  }
`;
