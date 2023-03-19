import * as Styles from './styles';
import { IResetAllButton } from './types';

const CancelEverything = ({ text, onClick }: IResetAllButton) => {
  return (
    <Styles.BackButtons onClick={onClick}>
      <Styles.Cross />
      <p>{text}</p>
    </Styles.BackButtons>
  );
};

export { CancelEverything };
