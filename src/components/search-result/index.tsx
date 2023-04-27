import * as Styles from './styles';
import { MoveSun } from './moveSun';
import { MoveCloud } from './moveCloud';
import { ISearchResult } from './types';

export const NoFoundResult = ({ title, text }: ISearchResult) => {
  return (
    <>
      <Styles.Wrapper>
        <Styles.MainCloud>
          <Styles.StyledSVG />

          <Styles.ContentWrapper>
            <Styles.Title>{title}</Styles.Title>
            <Styles.Text>{text}</Styles.Text>
          </Styles.ContentWrapper>

          <MoveSun />

          <MoveCloud />
        </Styles.MainCloud>
      </Styles.Wrapper>
    </>
  );
};
