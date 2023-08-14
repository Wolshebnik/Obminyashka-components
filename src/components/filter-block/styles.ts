import styled, { css } from 'styled-components';
import { Input } from 'components/input';

export const Card = styled.div`
  padding: 25px 25px 28px;
  min-width: 300px;
  max-width: 334px;
  border-radius: 20px;
  border: 2px dashed #71c2da;

  ${({ theme }) => css`
    ${theme.responsive.isDesktop && css``}
  `}
`;

export const Title = styled.span`
  margin-left: 7px;
  color: #29a5d4;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
`;

export const CategoryTitle = styled.span<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 19px;
  line-height: normal;
  cursor: pointer;
`;

export const Categories = styled.div`
  padding: 20px 0 0 11px;
  margin-top: 10px;
  border-top: 1px solid #d1d1d1;
`;

export const Triangle = styled.span<{ isOpen: boolean }>`
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-left-width: 8px;
  border-right-width: 8px;
  border-top: 10px solid #71c2da;
  transition: all 0.4s ease;

  ${({ isOpen }) => css`
    transform: ${isOpen && `rotate(180deg)`};
  `}
`;

export const ScrollWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
    border: 1px solid white;
    background: #d9d9d9;
  }

  &::-webkit-scrollbar-thumb {
    height: 100px;
    border-radius: 10px;
    background: #71c2da;
  }
`;

export const SubCategories = styled.div<{
  type?: string;
  isOpen: boolean;
}>`
  overflow: hidden;
  transition: all 0.4s ease;

  ${({ isOpen, type }) => css`
    max-height: ${isOpen ? '1000px' : '0'};

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

export const Cross = styled.div<{ type?: string }>`
  ${({ theme, type }) => css`
    ${type !== 'checkbox' &&
    type !== 'input' &&
    type !== 'radio' &&
    css`
      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 48%;
        right: 10px;
        width: 16px;
        height: 1.5px;
        background: ${theme.colors.white};
      }

      &:before {
        webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &:after {
        webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    `}
  `}
`;

export const SubCategory = styled.div<{ type?: string; isActive: boolean }>`
  position: relative;
  padding: 6px 14px;
  margin: 0 16px 4px 12px;
  border-radius: 5px;
  color: #777;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  ${({ theme, type, isActive }) => css`
    ${theme.responsive.isDesktop &&
    css`
      font-size: 16px;
    `}

    ${type === 'input' &&
    css`
      padding: 0;
      margin: 0 16px 20px 0;
    `}

    ${type === 'checkbox' &&
    css`
      padding: 0;
      margin: 8px 17px 16px 10px;
    `}

    ${type === 'radio' &&
    css`
      padding: 0;
      margin: 16px 17px 16px 10px;
    `}

    ${isActive &&
    type !== 'checkbox' &&
    type !== 'input' &&
    type !== 'radio' &&
    css`
      background: #7ecde4;
      color: ${theme.colors.white};
    `}

    ${!isActive &&
    type !== 'checkbox' &&
    type !== 'input' &&
    type !== 'radio' &&
    css`
      &:hover {
        background: #b8e9fa;
        color: black;
      }

      &:has(${Cross}):hover {
        ${Cross}::before, ${Cross}::after {
          background: black;
        }
      }
    `}
  `}
`;

export const CustomInput = styled(Input)`
  padding: 6px 14px;
  height: 36px;
  border-radius: 5px;
  background: #dedede;
`;

export const RadioDiv = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      label {
        font-size: 16px;
      }
    `}

    label {
      margin-left: 10px;
      cursor: pointer;
    }

    input {
      cursor: pointer;
    }

    &:has(input:checked) {
      label {
        color: black;
        font-weight: 700;
      }
    }
  `}
`;
