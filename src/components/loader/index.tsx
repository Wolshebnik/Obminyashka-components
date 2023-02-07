import { ILoader } from './types';
import * as Styles from './styles';

const Loader = ({ styleType = 'default' }: ILoader) => (
  <Styles.Wrapper styleType={styleType}>
    <Styles.FirstDiv styleType={styleType} />
    <Styles.SecondDiv styleType={styleType} />
  </Styles.Wrapper>
);

export { Loader };
