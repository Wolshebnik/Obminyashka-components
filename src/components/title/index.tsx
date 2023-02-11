import { ITitle } from './types';
import * as Styles from './styles';

const Title = ({ text, style }: ITitle) => (
  <Styles.H2 style={style}>
    <Styles.Span />
    {text}
    <Styles.Span />
  </Styles.H2>
);

export { Title };
