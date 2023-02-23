import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 55px 20px;
  margin: 50px 0 65px;
`;

export const StylesForPagination = styled.div`
  margin: 0;
  padding: 0;
  font-size: 22px;

  ul,
  ol {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 5px 0;
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
      color: ${theme.colors.btnBlue};
      border: 1px solid ${theme.colors.btnBlue};
    `}

    :hover {
      transform: scale(1.1, 1.1);
    }

    :focus {
      ${({ theme }) => css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.btnBlue};
      `}
    }

    &-active {
      ${({ theme }) => css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.btnBlue};
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
        color: ${theme.colors.btnBlue};
        border: 1px solid ${theme.colors.btnBlue};
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
    margin-right: 10px;
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

  .rc-pagination-disabled {
    opacity: 0;
    pointer-events: none;
  }
`;
