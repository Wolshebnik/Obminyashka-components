import * as Styles from './styles';
import { MoveCloud } from './moveCloud';
import { ISearchResult } from './types';

export const NoFoundResult = ({ title, text }: ISearchResult) => {
  return (
    <Styles.Wrapper>
      <Styles.MainCloud>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Text>{text}</Styles.Text>
        <Styles.DefaultSun>
          <Styles.SunEmotion />
        </Styles.DefaultSun>
        <MoveCloud />
      </Styles.MainCloud>
    </Styles.Wrapper>
  );
};
