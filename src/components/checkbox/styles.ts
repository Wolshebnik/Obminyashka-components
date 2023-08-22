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

export const Label = styled.label<LabelArg>`
  display: flex;
  align-items: center;
  width: fit-content;
  line-height: 17px;
  cursor: pointer;

  ${({ theme, gap, checked, fontSize }) => css`
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
