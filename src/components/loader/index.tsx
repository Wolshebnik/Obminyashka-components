import * as Styles from './styles';
import { ILoader } from './types';

const Loader = ({ styleType = 'default' }: ILoader) => (
  <Styles.Wrapper styleType={styleType}>
    <Styles.FirstDiv styleType={styleType} />
    <Styles.SecondDiv styleType={styleType} />
  </Styles.Wrapper>
);

export { Loader };
