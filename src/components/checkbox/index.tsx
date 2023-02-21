import * as Icon from '../icon';
import { IInput } from './types';
import * as Styles from './styles';

export const CheckBox = ({
  gap,
  name,
  text,
  fontSize,
  onChange,
  checked = false,
  type = 'checkbox',
  ...props
}: IInput) => (
  <Styles.Label gap={gap} type={type} checked={checked} fontSize={fontSize}>
    <Styles.Input
      name={name}
      type={type}
      checked={checked}
      onChange={onChange}
      {...props}
    />
    {text && <span>{text}</span>}
    <Icon.Check />
  </Styles.Label>
);
