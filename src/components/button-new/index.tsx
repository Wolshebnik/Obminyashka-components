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
      height={height}
      animated={animated}
      disabled={disabled}
      colorType={colorType}
    >
      {plus && <Styles.WrapIcon>+&nbsp;&nbsp;</Styles.WrapIcon>}
      <span>{text.toUpperCase()}</span>
    </Styles.Button>
  );
};

export { ButtonNew };
