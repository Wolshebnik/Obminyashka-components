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
  hiddenCheckbox,
  checked = false,
  type = 'checkbox',
  ...props
}: IInput) => (
  <Styles.Label
    gap={gap}
    type={type}
    style={style}
    checked={checked}
    className="padding"
    fontSize={fontSize}
    hiddenCheckbox={hiddenCheckbox}
  >
    <Styles.Checkbox
      type={type}
      checked={checked}
      hiddenCheckbox={hiddenCheckbox}
    >
      <Styles.Input
        name={name}
        type={type}
        checked={checked}
        onChange={onChange}
        hiddenCheckbox={hiddenCheckbox}
        {...props}
      />

      <Icon.Check />
    </Styles.Checkbox>

    {text && <span>{text}</span>}
    {hiddenCheckbox && <Styles.Cross />}
  </Styles.Label>
);
