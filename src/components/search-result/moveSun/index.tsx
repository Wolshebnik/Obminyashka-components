import * as Styles from './styles';
import { IWindowWidth } from '../types';

export function MoveSun({ windowWidth }: IWindowWidth) {
  return <Styles.DefaultSun windowWidth={windowWidth} />;
}
