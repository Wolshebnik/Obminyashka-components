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
  height: 82px;

  ${({ theme }) => css`
    background: ${theme.colors.search.white};

    ${theme.responsive.isTablet &&
    css`
      height: 85px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      height: 168px;
    `}
  `}
`;
