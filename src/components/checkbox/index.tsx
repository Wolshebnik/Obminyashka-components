import {ReactComponent as CheckSvg } from '../../assets/icons/Check.svg';

import { CheckboxProps } from './types';
import { Div, Label, LabelSquare } from './styles';


const CheckBox = ({
    gap,
    text,
    margin,
    onClick,
    fontSize,
    checked = false,
  }: CheckboxProps) => (
  <Div
    margin={margin}
    onClick={onClick}
    checked={checked}
  >
    <LabelSquare checked={checked}>
      <CheckSvg />
    </LabelSquare>

    <div>
      <Label
        gap={gap}
        checked={checked}
        fontSize={fontSize}
      >
        {text}
      </Label>
    </div>
  </Div>
);

export { CheckBox };
