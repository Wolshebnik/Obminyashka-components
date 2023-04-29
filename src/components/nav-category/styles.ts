import styled, { css } from 'styled-components';

export const WrapCategoriesErrow = styled.div`
  position: relative;
  text-transform: uppercase;
  transition: all 0.3s ease;

  ${({ theme }) => css`
    /* color: ${theme.colors.btnBlue}; */
    color: #286cc9;

    &::after {
      position: absolute;
      right: -38px;
      bottom: 0;
      content: '';
      border: 8px solid transparent;
      border-top: 8px solid #286cc9;
      transition: all 0.3s ease;
    }
  `}
`;

export const WrapCategories = styled.div<{ open: boolean }>`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 222px;
  height: 50px;
  border: 2px dashed #3f76c1;
  border-radius: 26.6667px;
  padding: 0 33px;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  top: 25px;
  left: 25px;
  cursor: pointer;

  ${({ open }) => css`
    ${open &&
    css`
      ${WrapCategoriesErrow} {
        &::after {
          rotate: -180deg;
          bottom: 8px;
        }
      }
      border: 2px solid #3f76c1;
    `}
  `}
`;
