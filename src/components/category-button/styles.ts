import styled, { css } from 'styled-components';

export const WrapCategoriesErrow = styled.div`
  position: relative;
  text-transform: uppercase;
  transition: all 0.3s ease;

  ${({ theme }) => css`
    color: ${theme.colors.categotyBtn.colorText};

    &::after {
      position: absolute;
      right: -34px;
      bottom: 0;
      content: '';
      border: 8px solid transparent;
      border-top: 8px solid ${theme.colors.categotyBtn.colorText};
      transition: all 0.3s ease;
    }
  `}
`;

export const WrapCategories = styled.div<{
  top?: number;
  left?: number;
  open: boolean;
}>`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 222px;
  height: 50px;
  border-radius: 26.6667px;
  padding: 0 33px;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  cursor: pointer;

  ${({ theme, open, left, top }) => css`
    top: ${top ? `${top}px` : 0};
    left: ${left ? `${left}px` : 0};
    border: 2px dashed ${theme.colors.categotyBtn.border};

    ${open &&
    css`
      ${WrapCategoriesErrow} {
        &::after {
          rotate: -180deg;
          bottom: 8px;
        }
      }
      border: 2px solid ${theme.colors.categotyBtn.border};
    `}
  `}
`;
