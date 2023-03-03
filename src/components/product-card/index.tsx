import * as Icon from '../icon';
import * as Styles from './styles';
import { Button } from '../button';
import { Avatar } from '../avatar';
import { IProductCardProps } from './types';
import { InboxMessage } from '../inbox-message';
import { EllipsisText } from '../ellipsis-text';

const ProductCard = ({
  city,
  text,
  margin,
  onClick,
  picture,
  buttonText,
  isFavorite,
  avatar = '',
  inboxMessage,
}: IProductCardProps) => {
  return (
    <Styles.Card margin={margin}>
      <Styles.FavoriteMarker isFavorite={isFavorite}>
        {avatar ? (
          <Styles.StylizedAvatar>
            <Avatar width={40} height={40} source={avatar} />
          </Styles.StylizedAvatar>
        ) : (
          <Styles.FavoriteStarWrapper isFavorite={isFavorite}>
            <Styles.FavoriteStar />
          </Styles.FavoriteStarWrapper>
        )}
      </Styles.FavoriteMarker>

      <Styles.DivPicture>
        <Styles.Picture src={picture} alt="lot" />
      </Styles.DivPicture>

      <Styles.CardContent>
        <Styles.TextContent>{text}</Styles.TextContent>

        <Styles.LocationIcon>
          <Icon.Location />

          <Styles.CitySpan>
            <EllipsisText id={city} place="top">
              {city}
            </EllipsisText>
          </Styles.CitySpan>
        </Styles.LocationIcon>

        <Styles.ButtonBlock>
          <Button
            onClick={onClick}
            text={buttonText}
            width={inboxMessage ? 190 : 222}
          />

          {inboxMessage && <InboxMessage inboxMessage={inboxMessage} />}
        </Styles.ButtonBlock>
      </Styles.CardContent>
    </Styles.Card>
  );
};

export { ProductCard };
