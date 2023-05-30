import { IButtonNew } from './types';
import * as Styles from './styles';

const ButtonNew = ({
  text,
  onClick,
  plus = false,
  animated = false,
  disabled = false,
  colorType = 'blue',
  styleType = 'default',
}: IButtonNew) => {
  return (
    <Styles.Button
      onClick={onClick}
      animated={animated}
      disabled={disabled}
      colorType={colorType}
      styleType={styleType}
    >
      {plus && <span>+&nbsp;&nbsp;</span>}
      <Styles.Text>{text}</Styles.Text>
    </Styles.Button>
  );
};

export { ButtonNew };
