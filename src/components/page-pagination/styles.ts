import styled, { css } from 'styled-components';

import { rotateAnimation } from './animation';

import * as Icon from '../icon';

export const ChildrenContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px 20px;
  margin-bottom: 65px;

  ${({ theme }) => css`
    ${theme.responsive.isMobileBG &&
    css`
      grid-template-columns: repeat(3, 1fr);
    `}

    ${theme.responsive.isTablet &&
    css`
      grid-template-columns: repeat(2, 1fr);
      gap: 55px 30px;
    `}

    ${theme.responsive.isTabletBG &&
    css`
      grid-template-columns: repeat(3, 1fr);
    `}

    ${theme.responsive.isDesktopMD &&
    css`
      gap: 55px 40px;
    `}
      
      ${theme.responsive.isDesktopBS &&
    css`
      grid-template-columns: repeat(4, 1fr);
      gap: 55px 20px;
    `}
  `}
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      flex-direction: row;
    `}
  `}
`;

export const StylesForPagination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  height: 100%;
  font-size: 22px;

  ul,
  ol {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0;
    list-style: none;
  }

  .rc-pagination-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    text-align: center;
    list-style: none;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;

    ${({ theme }) => css`
      color: ${theme.colors.newButton.default.blue.bg};
      border: 1px solid ${theme.colors.newButton.default.blue.bg};
    `}

    :hover {
      transform: scale(1.1, 1.1);
    }

    :focus {
      ${({ theme }) => css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.newButton.default.blue.bg};
      `}
    }

    &.disabled {
      pointer-events: none;
    }

    &-active,
    &.disabled {
      ${({ theme }) => css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.newButton.default.blue.bg};
      `}

      :hover {
        transform: none;
      }
    }
  }

  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    outline: 0;

    button {
      width: 40px;
      height: 40px;
      padding-top: 12px;
      border-radius: 50%;
      outline: 0;
      cursor: pointer;

      ${({ theme }) => css`
        color: ${theme.colors.newButton.default.blue.bg};
        border: 1px solid ${theme.colors.newButton.default.blue.bg};
      `}

      :hover {
        transform: scale(1.1, 1.1);
      }
    }

    button::after {
      content: '•••';
    }
  }

  .rc-pagination-item,
  .rc-pagination-prev,
  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    margin-right: 5px;

    ${({ theme }) => css`
      ${theme.responsive.isTablet &&
      css`
        margin-right: 10px;
      `}
    `}
  }

  .rc-pagination-prev,
  .rc-pagination-next {
    display: flex;
    cursor: pointer;

    :hover {
      svg {
        transform: scale(1.1, 1.1);
      }
    }
  }

  .rc-pagination:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  width: 285px;
  order: -1;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      flex-direction: row;
      margin-bottom: 0;
      order: 2;
    `}
  `}
`;

export const Logo = styled(Icon.Logo)<{ isLoading: boolean }>`
  width: 48px;
  height: 48px;

  ${({ isLoading }) => css`
    ${isLoading &&
    css`
      animation: ${rotateAnimation} 0.5s infinite linear;
    `}
  `}
`;
