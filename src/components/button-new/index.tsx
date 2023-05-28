import { IButtonNew } from './types';
import * as Styles from './styles';

const ButtonNew = ({
  text,
  plus,
  hover = true,
  animated = false,
  disabled = false,
  colorType = 'green',
  onClick,
}: IButtonNew) => {
  return (
    <Styles.Button
      hover={hover}
      animated={animated}
      disabled={disabled}
      colorType={colorType}
      onClick={onClick}
    >
      {plus && <span>+&nbsp;&nbsp;</span>}
      <Styles.Text>{text}</Styles.Text>
    </Styles.Button>
  );
};

export { ButtonNew };
