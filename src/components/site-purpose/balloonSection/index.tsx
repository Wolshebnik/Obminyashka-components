import * as Styles from '../styles';
import { Rainbow } from './rainbow';
import { MoveCloud } from './moveCloud';
import { Responsive } from 'components';

const BalloonSection = () => {
  return (
    <>
      <Responsive.NotMobile>
        <Styles.ContainerRainbowAnimation>
          <Rainbow />
          <MoveCloud />
        </Styles.ContainerRainbowAnimation>
      </Responsive.NotMobile>
    </>
  );
};

export { BalloonSection };
