import * as Styles from './styles';
import * as Image from 'components/img';

const Rainbow = () => {
  return (
    <Styles.RainbowSection>
      <Styles.RainbowFirstCloud src={Image.cloud} alt="Cloud" />
      <Styles.RainbowSecondCloud src={Image.cloud} alt="Cloud" />

      <Styles.Rainbow src={Image.rainbow} alt="Rainbow" />

      <Styles.RedBallon src={Image.redBalloon} alt="Red ballon" />

      <Styles.YellowBallon src={Image.yellowBalloon} alt="Yellow ballon" />

      <Styles.OrangeBallon src={Image.orangeBalloon} alt="Orange ballon" />
    </Styles.RainbowSection>
  );
};

export { Rainbow };
