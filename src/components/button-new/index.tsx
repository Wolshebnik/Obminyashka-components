import { IButtonNew } from './types';
import * as Styles from './styles';

const ButtonNew = ({ text, plus, width = 254 }: IButtonNew) => {
  return (
    <Styles.Button width={width}>
      {plus && <Styles.WrapIcon>+&nbsp;&nbsp;</Styles.WrapIcon>}
      <span>{text}</span>
    </Styles.Button>
  );
};

export { ButtonNew };
