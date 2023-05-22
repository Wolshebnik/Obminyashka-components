import styled, { css } from 'styled-components';

export const CategoriesBody = styled.div`
  position: relative;
`;

export const CategoriesText = styled.div`
  text-transform: uppercase;

  ${({ theme }) => css`
    color: ${theme.colors.categoryBtn.colorText};
  `}
`;

export const CategoriesArrow = styled.div`
  margin-bottom: 5px;
  transition: all 0.3s ease;
`;

export const CategoriesDesktop = styled.div<{
  isOpen: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px;
  width: 222px;
  height: 50px;
  border-radius: 26px;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  cursor: pointer;

  ${({ theme, isOpen }) => css`
    border: 2px dashed ${theme.colors.categoryBtn.border};

    ${isOpen &&
    css`
      ${CategoriesArrow} {
        margin-bottom: -8px;
        transform: rotate(180deg);
      }
      border: 2px solid ${theme.colors.categoryBtn.border};
    `}
  `}
`;

export const Categories = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      height: 30px;
      width: 30px;
    `}
  `}
`;
