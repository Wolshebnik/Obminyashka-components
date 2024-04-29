import * as Styles from './styles';
import { IButtonNew } from './types';

const ButtonNew = ({
  text,
  plus,
  icon,
  width,
  height,
  square,
  onClick,
  animated,
  disabled,
  type = 'button',
  colorType = 'blue',
  styleType = 'default',
}: IButtonNew) => {
  return (
    <Styles.Button
      type={type}
      width={width}
      height={height}
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
