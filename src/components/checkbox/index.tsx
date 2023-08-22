import * as Icon from '../icon';
import { IInput } from './types';
import * as Styles from './styles';

export const CheckBox = ({
  gap,
  name,
  text,
  style,
  fontSize,
  onChange,
  checked = false,
  type = 'checkbox',
  ...props
}: IInput) => (
  <Styles.Label
    gap={gap}
    type={type}
    style={style}
    checked={checked}
    fontSize={fontSize}
  >
    <Styles.Checkbox type={type} checked={checked}>
      <Styles.Input
        name={name}
        type={type}
        checked={checked}
        onChange={onChange}
        {...props}
      />

      <Icon.Check />
    </Styles.Checkbox>

    {text && <span>{text}</span>}
  </Styles.Label>
);
