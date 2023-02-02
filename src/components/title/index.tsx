import { H2 } from './styles';

const Title = ({ whatClass = '', text, style }) => (
  <H2 className={whatClass} style={style}>
    {text}
  </H2>
);

export { Title };
