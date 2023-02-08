import * as Icon from '../icon';
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
      <Icon.Check />
    </LabelSquare>

      <Label
        gap={gap}
        checked={checked}
        fontSize={fontSize}
      >
        {text}
      </Label>
  </Div>
);

export { CheckBox };
