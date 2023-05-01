import styled, { css } from 'styled-components';

export const WrapCategoriesText = styled.div`
  position: relative;
  text-transform: uppercase;

  ${({ theme }) => css`
    color: ${theme.colors.categoryBtn.colorText};
  `}
`;

export const WrapCategoriesArrow = styled.div`
  position: relative;
  bottom: 3px;
  transition: all 0.3s ease;
`;

export const WrapCategoriesDesktop = styled.div<{
  top?: number;
  left?: number;
  open: boolean;
}>`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px;
  width: 222px;
  height: 50px;
  border-radius: 26.6667px;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  cursor: pointer;

  ${({ theme, open, left, top }) => css`
    top: ${top ? `${top}px` : 0};
    left: ${left ? `${left}px` : 0};
    border: 2px dashed ${theme.colors.categoryBtn.border};

    ${open &&
    css`
      ${WrapCategoriesArrow} {
        bottom: -4px;
        rotate: 180deg;
      }
      border: 2px solid ${theme.colors.categoryBtn.border};
    `}

    ${!theme.responsive.isDesktop &&
    css`
      display: none;
    `}
  `}
`;

export const WrapCategories = styled.div<{
  top?: number;
  left?: number;
}>`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${({ theme, left, top }) => css`
    top: ${top ? `${top}px` : 0};
    left: ${left ? `${left}px` : 0};

    ${theme.responsive.isDesktop &&
    css`
      display: none;
    `}
  `}
`;
