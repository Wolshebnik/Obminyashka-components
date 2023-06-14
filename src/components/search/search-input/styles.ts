import styled, { css } from 'styled-components';

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 31px 8px 11px;
  width: 100%;
  max-width: 310px;
  min-width: 180px;
  border-radius: 26px;

  input[type='text']::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  input[type='text']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  ${({ theme }) => css`
    background: ${theme.colors.search.white};
    border: 2px solid ${theme.colors.search.blue};
  `}
`;

export const IconWrapper = styled.div<{ isNotEmpty?: boolean }>`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  ${({ theme, isNotEmpty }) => css`
    ${!theme.responsive.isMobile &&
    css`
      width: 24px;
      height: 24px;
    `}

    ${isNotEmpty &&
    css`
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);

      svg {
        transition: ${theme.transition.default};

        path {
          fill: ${theme.colors.search.blue};
        }

        :hover {
          transform: rotate(90deg);
          transition: ${theme.transition.default};
        }
      }
    `}
    
    ${theme.responsive.isDesktop &&
    !isNotEmpty &&
    css`
      :hover {
        position: relative;
        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 26px;
          height: 26px;
          transform: translate(-50%, -50%);
          transition: width 0.16s, height 0.16s;
        }
      }
    `}
  `}
`;

export const SearchInput = styled.input`
  padding: 0 5px;
  width: 100%;
  border: none;
  outline: none;
`;
