import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-weight: 600;

  ${({ theme }) => css`
    color: ${theme.colors.btnBlue};
  `}
`;

export const Text = styled.span`
  margin: 0 8px;
  line-height: 20px;
`;

export const Icon = styled.span`
  > svg {
    height: 24px;
    width: 24px;
  }

  ${({ theme }) => css`
    > svg > path {
      fill: ${theme.colors.btnBlue};
    }
  `}
`;
