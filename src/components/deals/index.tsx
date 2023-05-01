import { Responsive } from 'components';

import * as Icon from '../icon';
import { IDeals } from './types';
import * as Styles from './styles';

const Deals = ({ to, text, heartIcon, background, puzzleIcon }: IDeals) => {
  const WrapperWithCondition = background
    ? Styles.WrapperWithBackground
    : Styles.WrapperWithLink;

  return (
    <WrapperWithCondition to={to}>
      {puzzleIcon && (
        <Responsive.Desktop>
          <Styles.PuzzleIconWrapper>
            <Icon.Puzzle />
          </Styles.PuzzleIconWrapper>
        </Responsive.Desktop>
      )}

      {heartIcon && (
        <Styles.HeartIconWrapper>
          <Icon.Heart />
        </Styles.HeartIconWrapper>
      )}

      <Styles.Text>{text}</Styles.Text>
    </WrapperWithCondition>
  );
};

export { Deals };
