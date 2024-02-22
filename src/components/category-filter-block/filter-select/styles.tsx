import styled, { css } from 'styled-components';

export const CategoryTitle = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 19px;
  line-height: normal;
  cursor: pointer;
`;

export const Triangle = styled.span<{ isOpen: boolean }>`
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-left-width: 8px;
  border-right-width: 8px;
  transition: all 0.4s ease;

  ${({ theme, isOpen }) => css`
    border-top: 10px solid ${theme.colors.categoryFilter.triangle};
    transform: ${isOpen && `rotate(180deg)`};
  `}
`;

export const ScrollWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;

  ${({ theme }) => css`
    &::-webkit-scrollbar {
      width: 5px;
      border-radius: 10px;
      border: 1px solid white;
      background: ${theme.colors.categoryFilter.scrollBgGrey};
      opacity: 0;
    }

    &::-webkit-scrollbar-thumb {
      height: 100px;
      border-radius: 10px;
      background: ${theme.colors.categoryFilter.scrollBgBlue};
      opacity: 0;
    }
  `}
`;

export const SubCategories = styled.div<{
  isOpen: boolean;
}>`
  display: grid;
  gap: 4px;
  overflow: hidden;
  transition: all 0.4s ease;

  ${({ isOpen }) => css`
    max-height: ${isOpen ? '2000px' : '0'};

    ${isOpen &&
    css`
      margin: 0 0 8px;
    `}
  `}
`;

export const SubCategory = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 35px 7px 14px;
  margin: 0 16px 0 12px;
  border-radius: 5px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.colors.colorGrey};

    ${theme.responsive.isDesktop &&
    css`
      font-size: 16px;
    `}
  `}
`;
