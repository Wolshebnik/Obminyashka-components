import * as Styles from './styles';
import { ISubtitle } from './types';

export const Subtitle = ({ textTitle, hiddenStar, style }: ISubtitle) => {
  return (
    <Styles.TitleH3 style={style}>
      {textTitle}&nbsp;
      <Styles.Star hiddenStar={hiddenStar}>*</Styles.Star>
    </Styles.TitleH3>
  );
};
