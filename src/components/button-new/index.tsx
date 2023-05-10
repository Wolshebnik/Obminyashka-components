import { IButtonNew } from './types';
import * as Styles from './styles';

const ButtonNew = ({
  text,
  plus,
  width = 254,
  height = 50,
  hover = true,
  animated = false,
  disabled = false,
  colorType = 'green',
}: IButtonNew) => {
  return (
    <Styles.Button
      width={width}
      hover={hover}
      animated={animated}
      disabled={disabled}
      colorType={colorType}
      height={height}
    >
      {plus && <Styles.WrapIcon>+&nbsp;&nbsp;</Styles.WrapIcon>}
      <span>{text}</span>
    </Styles.Button>
  );
};

export { ButtonNew };
