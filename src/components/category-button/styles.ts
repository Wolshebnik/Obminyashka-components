import styled, { css } from 'styled-components';

export const CategoriesDesktop = styled.div<{
  isOpen: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px;
  width: 222px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  border-radius: 26px;
  border: 2px dashed ${({ theme }) => theme.colors.categoryBtn.border};
  cursor: pointer;
`;

export const CategoriesText = styled.span`
  color: ${({ theme }) => theme.colors.categoryBtn.colorText};
  text-transform: uppercase;
  white-space: nowrap;
`;

export const triangle = styled.span<{ isOpen: boolean }>`
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-left-width: 8px;
  border-right-width: 8px;
  border-top: 10px solid black;
  transition: all 0.3s ease;

  ${({ theme, isOpen }) => css`
    border-top: 10px solid ${theme.colors.categoryBtn.colorText};

    ${isOpen && ` transform: rotate(180deg);`}
  `}
`;

export const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${({ theme }) =>
    theme.responsive.isMobile &&
    css`
      height: 30px;
      width: 30px;
    `}
`;
