import * as Styles from './styles';
import { ChildrenProps } from '../../../types';

const Header = ({ children }: ChildrenProps) => {
  return (
    <Styles.Header>
      <Styles.Container>{children}</Styles.Container>
    </Styles.Header>
  );
};

export { Header };
