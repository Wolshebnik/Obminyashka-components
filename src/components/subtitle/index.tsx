import * as Styles from './styles';
import { ISubtitle } from './types';

export const Subtitle = ({ textTitle, hiddenStar, style }: ISubtitle) => {
  return (
    <Styles.TitleH3 style={style}>
      {textTitle}&nbsp;
      {!hiddenStar && <Styles.Star>*</Styles.Star>}
    </Styles.TitleH3>
  );
};
