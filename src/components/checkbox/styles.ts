import styled, { css } from 'styled-components';

import { LabelArg, InputArg, ICheckbox } from './types';

export const Input = styled.input<InputArg>`
  display: none;
  appearance: none;
  -webkit-appearance: none;
  flex-shrink: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const Cross = styled.div<{ type?: string }>`
  ${({ theme }) => css`
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 43%;
      right: 22px;
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

export const Label = styled.label<LabelArg>`
  display: flex;
  align-items: center;
  width: fit-content;
  line-height: 17px;
  cursor: pointer;

  ${({ theme, gap, checked, fontSize, hiddenCheckbox, type }) => css`
    gap: ${gap || 20}px;
    font-size: ${fontSize || 14}px;
    color: ${checked
      ? theme.colors.blackColorText
      : theme.colors.colorTextDisabled};

    & > svg {
      display: block;
      width: 15px;
      height: 15px;

      & > path {
        opacity: ${checked ? 1 : 0};
        transition: 300ms;
      }
    }

    &:hover {
      & > svg {
        & > path {
          opacity: 1;
          fill: ${!checked && theme.colors.colorGrey};
        }
      }
    }

    ${hiddenCheckbox &&
    type === 'checkbox' &&
    css`
      margin: 0 16px 4px 12px;
      width: 100%;
      border-radius: 5px;
      color: ${theme.colors.colorGrey};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;

      &.padding {
        padding: 6px 14px;
      }

      ${theme.responsive.isDesktop &&
      css`
        font-size: 16px;
      `}

      ${checked &&
      css`
        background: ${theme.colors.categoryFilter.hiddenCheckbox.bgChecked};
        color: ${theme.colors.white};
      `}

      ${!checked &&
      css`
        &:hover {
          background: ${theme.colors.categoryFilter.hiddenCheckbox
            .bgNoCheckedHover};
          color: black;
        }

        &:has(${Cross}):hover {
          ${Cross}::before, ${Cross}::after {
            background: ${theme.colors.categoryFilter.hiddenCheckbox
              .bgNoCheckedHover};
          }
        }
      `}
    `}
  `}
`;

export const Checkbox = styled.div<ICheckbox>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 17px;
  width: 17px;
  height: 17px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  ${({ theme, checked, type, hiddenCheckbox }) => css`
    ${checked && `background-color: ${theme.colors.btnBlue}`};
    ${checked ? '' : `border: 3px solid ${theme.colors.colorGrey}`};
    border-radius: ${type === 'radio' ? '50%' : '0'};

    ${hiddenCheckbox &&
    css`
      position: absolute;
      opacity: 0;
    `}
  `}
`;
