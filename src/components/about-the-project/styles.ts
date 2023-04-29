import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const AboutTheProjectLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      cursor: pointer;
    `}
  `}
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  font-style: normal;
  text-transform: uppercase;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      font-size: 22px;
      font-weight: 400;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-left: 12px;
      font-size: 18px;
      font-weight: 400;
    `}
  `}
`;
