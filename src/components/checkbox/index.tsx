import * as Icon from '../icon';
import { IInput } from './types';
import * as Styles from './styles';

export const CheckBox = ({
  gap,
  text,
  margin,
  fontSize,
  onChange,
  checked = false,
  type = 'checkbox',
  ...props
}: IInput) => (
  <Styles.Div margin={margin} checked={checked} type={type}>
    <Styles.Label fontSize={fontSize} checked={checked} gap={gap} type={type}>
      <Styles.Input checked={checked} type={type} onChange={onChange} {...props} />
      <span>{text}</span>
      <Icon.Check />
    </Styles.Label>
  </Styles.Div>
);
