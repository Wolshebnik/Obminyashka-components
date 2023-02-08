import { useNavigate } from 'react-router-dom';

import * as Icon from '../icon';

import * as Styles from './styles';
import { IBackButton } from './types';

const BackButton = ({ onClick, icon, text, ...props }: IBackButton) => {
  const navigate = useNavigate();

  return (
    <Styles.Button onClick={onClick || (() => navigate(-1))} {...props}>
      <Styles.Icon>{icon || <Icon.ChevronLeft />}</Styles.Icon>
      {text && <Styles.Text>{text}</Styles.Text>}
    </Styles.Button>
  );
};

export { BackButton };
