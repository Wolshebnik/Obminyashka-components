import { ILoader } from './types';
import * as Styles from './styles';

export const Loader = ({ styleType = 'default' }: ILoader) => (
  <>
    {styleType === 'default' && (
      <Styles.LdsRipple>
        <Styles.FirstDiv />
        <Styles.SecondDiv />
      </Styles.LdsRipple>
    )}

    {styleType === 'secondary' && <Styles.LdsLinear />}
  </>
);
