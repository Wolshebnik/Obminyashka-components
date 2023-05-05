import styled, { css } from 'styled-components';

export const Header = styled.header`
  position: sticky;
  z-index: 9999;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 21px 15px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      padding: 13px 40px 12px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      padding: 36px 60px 29px 45px;
    `}
  `}
`;
