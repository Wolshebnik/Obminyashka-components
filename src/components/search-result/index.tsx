import { useWindowWidth } from 'hooks';
import { maskCloud } from 'components/img';

import * as Styles from './styles';
import { MoveCloud } from './moveCloud';
import { ISearchResult } from './types';

export const NoFoundResult = ({ title, text }: ISearchResult) => {
  const size = useWindowWidth();

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.MainCloud>
          <Styles.StyledImg src={maskCloud} alt="cloud" />

          <Styles.ContentWrapper>
            <Styles.Title windowWidth={size}>{title}</Styles.Title>
            <Styles.Text windowWidth={size}>{text}</Styles.Text>
          </Styles.ContentWrapper>

          <Styles.DefaultSun windowWidth={size} />

          <MoveCloud windowWidth={size} />
        </Styles.MainCloud>
      </Styles.Wrapper>
    </Styles.Container>
  );
};
