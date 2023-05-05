import styled, { css } from 'styled-components';

export const WrapIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 30px;
  cursor: pointer;

  ${({ theme }) => css`
    width: ${theme.responsive.isTablet && `40px;`};
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const WrapDeviceSearch = styled.div<{ isSearchActive?: boolean }>`
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  transition: transform 0.6s ease;

  ${({ theme, isSearchActive }) => css`
    background: ${theme.colors.search.background};

    ${isSearchActive &&
    css`
      transition: transform 0.6s ease;
      transform: translateY(100%);
    `}
  `}
`;
