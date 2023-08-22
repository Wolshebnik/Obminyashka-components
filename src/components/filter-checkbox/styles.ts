import styled, { css } from 'styled-components';

export const Cross = styled.div<{ type?: string }>`
  ${({ theme }) => css`
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
`;

export const StyledLabel = styled.label<{ isChecked: boolean }>`
  position: relative;
  display: flex;
  padding: 6px 14px;
  margin: 0 16px 4px 12px;
  width: 100%;
  border-radius: 5px;
  color: #777;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  ${({ theme, isChecked }) => css`
    ${theme.responsive.isDesktop &&
    css`
      font-size: 16px;
    `}

    ${isChecked &&
    css`
      background: #7ecde4;
      color: ${theme.colors.white};
    `}

    ${!isChecked &&
    css`
      &:hover {
        background: #b8e9fa;
        color: black;
      }

      &:has(${Cross}):hover {
        ${Cross}::before, ${Cross}::after {
          background: #b8e9fa;
        }
      }
    `}
  `}
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
