import styled, { css } from 'styled-components';
import { DivArg, LabelArg, LabelSquareArg } from './types';

const LabelSquare = styled.div<LabelSquareArg>`
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 17px;
  height: 17px;
  vertical-align: bottom;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  ${({ theme: { colors }, checked }) => css`
    background-color: ${checked && colors.btnBlue};
    border: 3px solid ${checked ? colors.btnBlue : colors.colorGrey};
  `}
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
  }
`;

const Label = styled.label<LabelArg>`
  display: block;
  line-height: 17px;
  cursor: pointer;
  max-width: 679px;
  width: 100%;

  ${({ theme: { colors }, gap, checked, fontSize }) => css`
    margin-left: ${(gap || 22 + 'px')};
    font-size: ${fontSize || 14 + 'px'};
    color: ${checked ? colors.blackColorText : colors.colorTextDisabled};
  `}
`;

const Div = styled.div<DivArg>`
  display: flex;
  transition: all ease-in-out 0.3s;
  margin: 0;

  ${(p) => css`
    margin: ${p.margin || 22 + 'px'};

    &:hover {
      ${LabelSquare} {
        & > svg {
          & > path {
            fill: ${p.checked ? 'white' : p.theme.colors.colorGrey};
          }
        }
      }
    }
  `}
`;

export { Div, Label, LabelSquare };
