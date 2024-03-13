import * as Icon from '../icon';
import { IDeals } from './types';
import * as Styles from './styles';
import * as Responsive from '../responsive';

const Deals = ({
  to,
  text,
  onClose,
  heartIcon,
  background,
  puzzleIcon,
  inFooterOAuth,
}: IDeals) => {
  const WrapperWithCondition = background
    ? Styles.WrapperWithBackground
    : Styles.WrapperWithLink;

  return (
    <WrapperWithCondition
      to={to}
      inFooterOAuth={inFooterOAuth}
      onClick={() => (onClose ? onClose() : null)}
    >
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
