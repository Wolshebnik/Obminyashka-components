import * as Styles from './styles';
import { IButtonNew } from './types';

const ButtonNew = ({
  text,
  plus,
  onClick,
  animated,
  disabled,
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
