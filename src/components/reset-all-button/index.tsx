import { IResetAllButton } from './types';
import * as Styles from './styles';

const ResetAllButton = ({ text, onClick }: IResetAllButton) => {
  return (
    <Styles.BackButtons onClick={onClick}>
      <Styles.Cross />
      <p>{text}</p>
    </Styles.BackButtons>
  );
};

export { ResetAllButton };
