import * as Styles from './styles';
import { MoveSun } from './moveSun';
import { MoveCloud } from './moveCloud';
import { ISearchResult } from './types';
import { maskCloud } from 'components/img';

export const NoFoundResult = ({ title, text }: ISearchResult) => {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.MainCloud>
          <Styles.StyledImg src={maskCloud} alt="cloud" />

          <Styles.ContentWrapper>
            <Styles.Title>{title}</Styles.Title>
            <Styles.Text>{text}</Styles.Text>
          </Styles.ContentWrapper>

          <MoveSun />

          <MoveCloud />
        </Styles.MainCloud>
      </Styles.Wrapper>
    </Styles.Container>
  );
};
