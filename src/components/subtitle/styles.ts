import styled, { css } from 'styled-components';

export const TitleH3 = styled.h3`
  margin-bottom: 10px;
  font-family: 'Open Sans', sans-serif;
  font-size: 26px;
  font-weight: 600;
  line-height: 40px;
`;

export const Star = styled.span<{ hiddenStar?: boolean }>`
  ${({ hiddenStar, theme }) => css`
    display: ${hiddenStar ? 'none' : 'inline-block'};
    color: ${theme.colors.colorRed};
  `}
`;
