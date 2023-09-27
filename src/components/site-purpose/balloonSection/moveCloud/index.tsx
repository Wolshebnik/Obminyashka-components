import * as Styles from './styles';
import * as Image from 'components/img';

const MoveCloud = () => {
  return (
    <Styles.Wrapper>
      <Styles.FirstCloud src={Image.cloud} alt="Cloud" />
      <Styles.SecondCloud src={Image.cloud} alt="Cloud" />
      <Styles.ThirdCloud src={Image.cloud} alt="Cloud" />
      <Styles.FourthCloud src={Image.cloud} alt="Cloud" />
      <Styles.FifthCloud src={Image.cloud} alt="Cloud" />
      <Styles.SixthCloud src={Image.cloud} alt="Cloud" />
      <Styles.SeventhCloud src={Image.cloud} alt="Cloud" />
    </Styles.Wrapper>
  );
};

export { MoveCloud };
