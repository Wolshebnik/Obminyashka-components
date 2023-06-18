import { Responsive } from 'components';

import * as Icon from '../icon';
import * as Styles from './styles';
import { Button } from '../button';
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
  return (
    <Styles.Card margin={margin}>
      <Styles.CardContainer>
        <Styles.FavoriteMarker isFavorite={isFavorite}>
          {avatar ? (
            <Styles.StylizedAvatar>
              <Responsive.Mobile>
                <Avatar width={18} height={18} source={avatar} />
              </Responsive.Mobile>

              <Responsive.Tablet>
                <Avatar width={35} height={35} source={avatar} />
              </Responsive.Tablet>

              <Responsive.Desktop>
                <Avatar width={42} height={42} source={avatar} />
              </Responsive.Desktop>
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

            <Responsive.Tablet>
              <Icon.Location />
            </Responsive.Tablet>

            <Responsive.Desktop>
              <Icon.Location />
            </Responsive.Desktop>

            <Styles.City>
              <EllipsisText width={250} position="right">
                {city}
              </EllipsisText>
            </Styles.City>
          </Styles.Location>

          <Responsive.Desktop>
            <Styles.ButtonBlock>
              <Button
                onClick={onClick}
                text={buttonText}
                width={inboxMessage ? 190 : 254}
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
