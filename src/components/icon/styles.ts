import styled, { css } from 'styled-components';

export const SvgColor = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    margin-top: 8px;

    > svg {
      path,
      circle {
        fill: ${theme.colors.default.blackColorText};
      }
    }
  `}
`;
