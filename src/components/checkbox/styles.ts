import styled, { css } from 'styled-components';

import { LabelArg, InputArg } from './types';

export const Input = styled.input<InputArg>`
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 17px;
  height: 17px;
  vertical-align: bottom;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  ${({ theme, checked, type }) => css`
    ${checked && `background-color: ${theme.colors.btnBlue}`};
    border: 3px solid ${checked ? theme.colors.btnBlue : theme.colors.colorGrey};
    border-radius: ${type === 'radio' ? '50%' : '0'};
  `}
`;

export const Label = styled.label<LabelArg>`
  position: relative;
  display: flex;
  width: fit-content;
  line-height: 17px;
  cursor: pointer;

  ${({ theme, gap, checked, fontSize }) => css`
    gap: ${gap || 12}px;
    font-size: ${fontSize || 14}px;
    color: ${checked
      ? theme.colors.blackColorText
      : theme.colors.colorTextDisabled};

    & > svg {
      position: absolute;
      display: block;
      top: 8.5px;
      left: 8.5px;
      width: 10px;
      height: 8px;
      transform: translate(-50%, -50%);
    }

    &:hover {
      & > svg {
        & > path {
          fill: ${checked ? theme.colors.white : theme.colors.colorGrey};
        }
      }
    }
  `}
`;
