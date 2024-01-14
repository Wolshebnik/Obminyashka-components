import styled, { css } from 'styled-components';

import * as Animation from '../animation';

export const BalloonWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      animation: ${Animation.balloonAnimation} 15s infinite;
    `}
  `}
`;
