import styled, { css } from 'styled-components';

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  gap: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  font-family: Caveat, cursive;

  ${({ theme }) => css`
    color: ${theme.colors.activeColor};

    ${theme.responsive.isMobile &&
    css`
      justify-content: center;
      font-size: 24px;
    `}

    ${theme.responsive.isTablet &&
    css`
      font-size: 35px;
      padding-left: 46px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      font-size: 48px;
    `}
  `}
`;

export const Span = styled.span<{ hiddenDots?: boolean }>`
  width: 11px;
  height: 11px;
  border-radius: 50%;

  ${({ hiddenDots, theme }) => css`
    display: ${hiddenDots ? 'none' : 'inline-block'};
    background-color: ${theme.colors.btnBlue};
  `}
`;
