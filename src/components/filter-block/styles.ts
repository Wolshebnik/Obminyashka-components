import styled, { css } from 'styled-components';
import { Input } from 'components/input';

export const Card = styled.div`
  padding: 25px 25px 0;
  min-width: 300px;
  max-width: 334px;
  border-radius: 20px;
  border: 2px dashed #71c2da;

  ${({ theme }) => css`
    ${theme.responsive.isDesktop && css``}
  `}
`;

export const Title = styled.span`
  margin-left: 13px;
  color: #29a5d4;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
`;

export const Categories = styled.div`
  padding: 20px 0 7px 13px;
  margin-top: 10px;
  border-top: 1px solid #d1d1d1;
`;

export const CategoryTitle = styled.span<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  border-top: 10px solid #71c2da;
  transition: all 0.5s;

  ${({ isOpen }) => css`
    transform: ${isOpen && `rotate(180deg)`};
  `}
`;

export const SubCategories = styled.div<{
  type?: string;
  isOpen: boolean;
  isScroll: boolean;
}>`
  margin: 6px 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in;

  ${({ isOpen, type, isScroll }) => css`
    max-height: ${isOpen ? '300px' : '0'};

    ${type !== 'checkbox' &&
    type !== 'input' &&
    css`
      margin: 10px 0;
    `}

    ${isScroll &&
    isOpen &&
    css`
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
    `}
  `}
`;

export const Cross = styled.span<{ type?: string }>`
  ${({ theme, type }) => css`
    ${type !== 'checkbox' &&
    type !== 'input' &&
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
  padding: 6px 10px;
  margin: 6px 17px 6px 10px;
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
      margin: 16px 10px 16px 0;
    `}

    ${type === 'checkbox' &&
    css`
      padding: 0;
      margin: 16px 17px 16px 10px;
    `}

    ${isActive &&
    type !== 'checkbox' &&
    type !== 'input' &&
    css`
      background: #7ecde4;
      color: ${theme.colors.white};
    `}

    ${!isActive &&
    type !== 'checkbox' &&
    type !== 'input' &&
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
  border-radius: 5px;
  background: #dedede;
`;
