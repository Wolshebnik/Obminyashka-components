import * as Styles from './styles';
import { IWindowWidth } from '../types';

export const MoveCloud = ({ windowWidth }: IWindowWidth) => {
  return (
    <>
      <Styles.FirstCloud windowWidth={windowWidth} />
      <Styles.SecondCloud windowWidth={windowWidth} />
      <Styles.ThirdCloud windowWidth={windowWidth} />
    </>
  );
};
