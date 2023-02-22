import styled, { css } from 'styled-components';

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.colors.btnBlue};
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 24px;
  font-family: Caveat, cursive;
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
