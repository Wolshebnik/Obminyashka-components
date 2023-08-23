import * as Styles from './styles';
import { IInputLocation } from './types';

export const InputLocation = ({
  name,
  label,
  value,
  onChange,
}: IInputLocation) => {
  return (
    <label>
      <Styles.InputLocation
        type="text"
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </label>
  );
};
