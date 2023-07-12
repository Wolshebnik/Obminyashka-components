import * as Styles from './styles';
import { IButtonNew } from './types';

const ButtonNew = ({
  text,
  plus,
  icon,
  onClick,
  animated,
  disabled,
  square = false,
  colorType = 'blue',
  styleType = 'default',
}: IButtonNew) => {
  return (
    <Styles.Button
      square={square}
      onClick={onClick}
      animated={animated}
      disabled={disabled}
      colorType={colorType}
      styleType={styleType}
    >
      {icon && icon}
      {plus && <span>+&nbsp;&nbsp;</span>}
      {text && <Styles.Text>{text}</Styles.Text>}
    </Styles.Button>
  );
};

export { ButtonNew };
