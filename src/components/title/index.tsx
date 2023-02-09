import { H2 } from './styles';
import { ITitle } from './types';

const Title = ({ text, style } : ITitle) => (
  <H2 style={style}>
    {text}
  </H2>
);

export { Title };
