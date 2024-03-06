import styled, { css } from 'styled-components';

export const Card = styled.div`
  padding: 25px 25px 28px;
  min-width: 300px;
  max-width: 334px;
  border-radius: 20px;
  border: 2px dashed ${({ theme }) => theme.colors.categoryFilter.border};
`;

export const Title = styled.span`
  margin-left: 7px;
  color: ${({ theme }) => theme.colors.categoryFilter.title};
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
`;

export const CategoryTitle = styled.span<{
  disabled: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 19px;
  line-height: normal;
  cursor: pointer;

  ${({ disabled }) => css`
    ${disabled &&
    css`
      opacity: 0.2;
      pointer-events: none;
    `}
  `}
`;

export const Categories = styled.div`
  padding: 20px 0 0 11px;
  margin-top: 10px;
  border-top: 1px solid
    ${({ theme }) => theme.colors.categoryFilter.scrollBgGrey};
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

export const ScrollWrapper = styled.div<{ type?: string }>`
  max-height: 300px;
  overflow-y: auto;

  ${({ theme, type }) => css`
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

    ${type === 'input' &&
    css`
      max-height: 1000px;

      &::-webkit-scrollbar {
        display: none;
      }

      &::-webkit-scrollbar-thumb {
        display: none;
      }
    `}
  `}
`;

export const SubCategories = styled.div<{
  type?: string;
  isOpen: boolean;
}>`
  overflow: hidden;
  transition: all 0.4s ease;

  ${({ isOpen, type }) => css`
    max-height: ${isOpen ? '2000px' : '0'};

    ${type !== 'checkbox' &&
    type !== 'input' &&
    type !== 'radio' &&
    isOpen &&
    css`
      margin: 8px 0 20px;
    `}

    ${type === 'checkbox' &&
    isOpen &&
    css`
      margin: 0 0 8px;
    `}

    ${type === 'radio' &&
    isOpen &&
    css`
      margin: 0 0 12px;
    `}
  `}
`;

export const SubCategory = styled.div<{
  type?: string;
  hiddenCheckbox?: boolean;
}>`
  position: relative;
  display: flex;
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  ${({ theme, type, hiddenCheckbox }) => css`
    color: ${theme.colors.colorGrey};

    ${theme.responsive.isDesktop &&
    css`
      font-size: 16px;
    `}

    ${type === 'input' &&
    css`
      padding: 0;
      margin: 0 0 20px 0;
    `}

    ${type === 'checkbox' &&
    css`
      padding: 0;
      margin: 8px 17px 16px 10px;
    `}

    ${type === 'checkbox' &&
    hiddenCheckbox &&
    css`
      padding: 0;
      margin: 0;
    `}

    ${type === 'radio' &&
    css`
      padding: 0;
      margin: 16px 17px 16px 10px;
    `}
  `}
`;
