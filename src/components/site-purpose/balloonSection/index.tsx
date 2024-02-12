import * as Styles from './styles';
import { Rainbow } from './rainbow';
import { BalloonClouds } from './balloonClouds';
import { Responsive } from 'components';

const BalloonSection = () => {
  return (
    <>
      <Responsive.NotMobile>
        <Styles.BalloonWrapper>
          <Rainbow />
          <BalloonClouds />
        </Styles.BalloonWrapper>
      </Responsive.NotMobile>
    </>
  );
};

export { BalloonSection };
