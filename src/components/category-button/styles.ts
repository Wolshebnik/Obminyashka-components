import styled, { css } from 'styled-components';

export const CategoriesText = styled.div`
  color: ${({ theme }) => theme.colors.categoryBtn.colorText};
  text-transform: uppercase;
`;

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
  border-radius: 26px;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  cursor: pointer;

  ${({ theme, isOpen }) => css`
    border: 2px dashed ${theme.colors.categoryBtn.border};

    &:after {
      content: '';
      position: absolute;
      right: 25px;
      bottom: 18.5px;
      border: 0 solid transparent;
      border-right-width: 9px;
      border-left-width: 9px;
      border-bottom: 8px solid ${theme.colors.categoryBtn.colorText};
      transition: all 0.3s ease;
    }

    ${isOpen &&
    css`
      border: 2px solid ${theme.colors.categoryBtn.border};

      &:after {
        transform: rotate(-180deg);
      }
    `}
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
