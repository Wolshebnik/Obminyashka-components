import { ILoader } from './types';
import * as Styles from './styles';

export const Loader = ({ animationType = 'default' }: ILoader) => (
  <>
    {animationType === 'default' && (
      <Styles.LdsRipple>
        <Styles.FirstDiv />
        <Styles.SecondDiv />
      </Styles.LdsRipple>
    )}

    {animationType === 'secondary' && (
      <Styles.styleWrapper>
        <Styles.LdsLinear />
      </Styles.styleWrapper>
    )}
  </>
);
