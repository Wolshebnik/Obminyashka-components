import styled, { css } from 'styled-components';

import { DivArg, LabelArg, InputArg } from './types';

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

  ${({ theme, gap, checked, type }) => css`
    margin-right: ${gap || 12}px;
    background-color: ${checked && theme.colors.btnBlue};
    border: 3px solid ${checked ? theme.colors.btnBlue : theme.colors.colorGrey};
    border-radius: ${type === 'radio' ? '50%' : '0'};
  `}
`;

export const Label = styled.label<LabelArg>`
  position: relative;
  display: block;
  max-width: 679px;
  width: 100%;
  line-height: 17px;
  cursor: pointer;

  ${({ theme, gap, type, checked, fontSize }) => css`
    margin-left: ${gap || 22}px;
    font-size: ${fontSize || 14}px;
    color: ${checked ? theme.colors.blackColorText : theme.colors.colorTextDisabled};

    & > svg {
      display: block;
      position: absolute;
      top: 8.5px;
      left: 8.5px;
      width: 10px;
      height: 8px;
      transform: translate(-50%, -50%);
    }

    &:hover {
      & > svg {
        & > path {
          fill: ${checked ? 'white' : theme.colors.colorGrey};
        }
      }
    }
  `}
`;

export const Div = styled.div<DivArg>`
  display: flex;
  transition: all ease-in-out 0.3s;

  ${({ margin }) => css`
    margin: ${margin || 12}px;
  `}
`;
