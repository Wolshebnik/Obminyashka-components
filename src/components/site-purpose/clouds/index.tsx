import * as Styles from './styles';
import * as Image from 'components/img';

const Clouds = () => {
  return (
    <>
      <Styles.LeftWrapper>
        <Styles.HappySun src={Image.sun} alt="Sun" />
        <Styles.FirstLeftCloud src={Image.cloud} alt="Cloud" />
        <Styles.SecondSmallTopCloud src={Image.cloud} alt="Cloud" />
        <Styles.ThirdLeftCloud src={Image.cloud} alt="Cloud" />
        <Styles.BottomLeftSmallCloud src={Image.cloud} alt="Cloud" />
      </Styles.LeftWrapper>

      <Styles.RightWrapper>
        <Styles.RightTopCloud src={Image.cloud} alt="Cloud" />
        <Styles.RightMiddleCloud src={Image.cloud} alt="Cloud" />
        <Styles.RightBottomCloud src={Image.cloud} alt="Cloud" />
      </Styles.RightWrapper>
    </>
  );
};

export { Clouds };
