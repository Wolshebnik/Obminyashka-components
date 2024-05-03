import * as Styles from './styles';
import { IConfirmationProps } from './types';

export const SendingConfirmationPage = ({
  text,
  title,
}: IConfirmationProps) => {
  return (
    <Styles.BackGround>
      <Styles.CloudNull />
      <Styles.CloudOne />
      <Styles.CloudTwo />
      <Styles.CloudThree />
      <Styles.CloudFour />
      <Styles.CloudFive />
      <Styles.CloudSix />
      <Styles.CloudSeven />

      <Styles.SunBlock>
        <Styles.SunIcon />
      </Styles.SunBlock>

      <Styles.Wrapper>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Text>{text}</Styles.Text>

        <Styles.ClockBlock>
          <Styles.ClockIcon />
        </Styles.ClockBlock>
      </Styles.Wrapper>
    </Styles.BackGround>
  );
};
