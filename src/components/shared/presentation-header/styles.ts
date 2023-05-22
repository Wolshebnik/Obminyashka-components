import styled, { css } from 'styled-components';

export const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 21px 15px;

  ${({ theme }) => css`
    background: ${theme.colors.search.white};

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
