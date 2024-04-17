import { ButtonNew, Responsive } from 'components';

import { useWindowWidth } from 'hooks';

import * as Icon from '../icon';
import * as Styles from './styles';
import { Avatar } from '../avatar';
import { IProductCardProps } from './types';
import { EllipsisText } from '../ellipsis-text';
import { InboxMessage } from '../inbox-message';

const ProductCard = ({
  city,
  text,
  avatar,
  margin,
  onClick,
  picture,
  buttonText,
  isFavorite,
  inboxMessage,
}: IProductCardProps) => {
  const width = useWindowWidth();

  return (
    <Styles.Card margin={margin}>
      <Styles.CardContainer onClick={width < 1366 ? onClick : () => {}}>
        <Styles.FavoriteMarker isFavorite={isFavorite}>
          {avatar ? (
            <Styles.StylizedAvatar>
              {width <= 768 && (
                <Avatar width={18} height={18} source={avatar} />
              )}

              {width >= 768 && width <= 1366 && (
                <Avatar width={35} height={35} source={avatar} />
              )}

              {width >= 1367 && (
                <Avatar width={42} height={42} source={avatar} />
              )}
            </Styles.StylizedAvatar>
          ) : (
            <Styles.FavoriteStarWrapper isFavorite={isFavorite}>
              <Styles.FavoriteStar />
            </Styles.FavoriteStarWrapper>
          )}
        </Styles.FavoriteMarker>

        <Styles.Picture src={picture} alt="lot" />

        <Styles.CardContent>
          <Styles.TextContent>{text}</Styles.TextContent>

          <Styles.Location>
            <Responsive.Mobile>
              <Icon.Location width={7} height={10} />
            </Responsive.Mobile>

            <Responsive.NotMobile>
              <Icon.Location />
            </Responsive.NotMobile>

            <Styles.City>
              <EllipsisText width={250} position="right">
                {city}
              </EllipsisText>
            </Styles.City>
          </Styles.Location>

          <Responsive.Desktop>
            <Styles.ButtonBlock>
              <ButtonNew
                height="50px"
                onClick={onClick}
                text={buttonText}
                colorType={'blue'}
                styleType={'default'}
              />

              {inboxMessage && <InboxMessage inboxMessage={inboxMessage} />}
            </Styles.ButtonBlock>
          </Responsive.Desktop>
        </Styles.CardContent>
      </Styles.CardContainer>
    </Styles.Card>
  );
};

export { ProductCard };
