import styled, { css } from 'styled-components';

export const CategoriesDesktop = styled.div<{
  isOpen: boolean;
  isDisabled?: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px;
  width: 212px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  border-radius: 26px;
  border: 2px dashed ${({ theme }) => theme.colors.categoryBtn.border};
  cursor: pointer;

  ${({ theme, isDisabled }) => css`
    ${theme.responsive.isDesktopMD &&
    css`
      padding: 0 12px;
      width: 155px;
      font-size: 18px;
      line-height: 18px;
    `}

    ${theme.responsive.isDesktopLG &&
    css`
      padding: 0 14px;
      width: 175px;
      font-size: 20px;
      line-height: 24px;
    `}

    ${theme.responsive.isDesktopBS &&
    css`
      padding: 0 24px;
      width: 222px;
      font-size: 24px;
    `}

    ${isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
  `}
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

export const Categories = styled.div<{
  isDisabled?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${({ theme, isDisabled }) => css`
    ${theme.responsive.isMobile &&
    css`
      height: 30px;
      width: 30px;
    `}

    ${isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
  `}
`;
