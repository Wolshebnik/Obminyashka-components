import styled, { css } from 'styled-components';

export const WrapIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 30px;
  cursor: pointer;

  ${({ theme }) => css`
    width: ${theme.responsive.isTablet && `40px;`};

    ${theme.responsive.isDesktop &&
    css`
      width: 48px;
      padding: 5px;
      border: 2px solid ${theme.colors.search.blue};
      border-radius: 50px;
    `}

    ${theme.responsive.isDesktopMD &&
    css`
      border: none;
    `}

    svg {
      path {
        fill: ${theme.colors.search.blue};
      }
    }
  `}
`;

export const WrapDeviceSearch = styled.div<{ isSearchActive?: boolean }>`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  width: 100%;
  backdrop-filter: blur(2px);
  z-index: -1;

  ${({ theme, isSearchActive }) => css`
    background: ${theme.colors.search.background};
    transition: ${theme.transition.dropDown};

    ${isSearchActive &&
    css`
      transform: translateY(100%);
    `}

    ${theme.responsive.isDesktop &&
    css`
      div {
        max-width: 514px;
      }
    `}

    div {
      border-color: ${theme.colors.search.blue};
    }
  `}
`;

export const CloseBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => css`
    svg {
      position: absolute;
      left: 50px;
      height: 40px;
      width: 40px;

      path {
        fill: ${theme.colors.search.blue};
      }
    }
  `}
`;
