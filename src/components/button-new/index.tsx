import { IButtonNew } from './types';
import * as Styles from './styles';

const ButtonNew = ({
  text,
  plus,
  onClick,
  hover = true,
  animated = false,
  disabled = false,
  colorType = 'green',
}: IButtonNew) => {
  return (
    <Styles.Button
      hover={hover}
      onClick={onClick}
      animated={animated}
      disabled={disabled}
      colorType={colorType}
    >
      {plus && <span>+&nbsp;&nbsp;</span>}
      <Styles.Text>{text}</Styles.Text>
    </Styles.Button>
  );
};

export { ButtonNew };
