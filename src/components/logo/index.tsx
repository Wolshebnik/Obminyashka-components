import * as Icon from '../icon';
import { ILogo } from './types';
import * as Styles from './styles';
import * as Responsive from '../responsive';

const Logo = ({ to, inFooter, inFooterOAuth }: ILogo) => {
  return (
    <Styles.Logo to={to} inFooter={inFooter}>
      <Styles.ImgWrapper inFooter={inFooter}>
        <Icon.Logo />
      </Styles.ImgWrapper>

      {!inFooter && (
        <Responsive.Desktop>
          <Styles.ProjectName inFooter={inFooter}>
            Obminyashka
          </Styles.ProjectName>
        </Responsive.Desktop>
      )}

      {inFooter && (
        <Styles.ProjectName inFooter={inFooter} inFooterOAuth={inFooterOAuth}>
          Obminyashka
        </Styles.ProjectName>
      )}
    </Styles.Logo>
  );
};

export { Logo };
