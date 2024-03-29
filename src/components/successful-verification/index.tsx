import * as Image from 'components/img';

import * as Styles from './styles';
import { ISuccess } from './types';
import { MoveCloud } from './moveCloud';

export const Success = ({
  href,
  text,
  title,
  textButton,
  nameWebsite,
}: ISuccess) => {
  return (
    <Styles.Box>
      <Styles.Title>{title}</Styles.Title>
      <Styles.NameWebsite>{nameWebsite}</Styles.NameWebsite>
      <Styles.Text>{text}</Styles.Text>

      <Styles.PhotoWrapper>
        <Styles.PhotoCartoon src={Image.cartoonBird} />
      </Styles.PhotoWrapper>

      <Styles.Btn to={href}>{textButton}</Styles.Btn>

      <MoveCloud />
    </Styles.Box>
  );
};
