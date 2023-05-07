import * as Styles from './styles';
import { ChildrenProps } from '../../../types';

const PresentationHeader = ({ children }: ChildrenProps) => {
  return (
    <Styles.Header>
      <Styles.Container>{children}</Styles.Container>
    </Styles.Header>
  );
};

export { PresentationHeader };
