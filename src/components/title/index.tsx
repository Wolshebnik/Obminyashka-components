import { ITitle } from './types';
import * as Styles from './styles';

const Title = ({ text, style, hiddenDots }: ITitle) => (
  <Styles.H2 style={style}>
    <Styles.Span hiddenDots={hiddenDots} />
    {text}
    <Styles.Span hiddenDots={hiddenDots} />
  </Styles.H2>
);

export { Title };
