import { useState } from 'react';

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
  margin,
  onClick,
  picture,
  buttonText,
  isFavorite,
  avatar = '',
  inboxMessage,
}: IProductCardProps) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleEnter = () => {
    setIsButtonHovered(true);
  };

  const handleLeave = () => {
    setIsButtonHovered(false);
  };

  return (
    <Styles.Card margin={margin} isButtonHovered={isButtonHovered}>
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

        <Responsive.Desktop>
          <Styles.CardContent>
            <Styles.TextContent>{text}</Styles.TextContent>

            <Styles.Location>
              <Icon.Location />

              <Styles.City>
                <EllipsisText width={250} position="right">
                  {city}
                </EllipsisText>
              </Styles.City>
            </Styles.Location>

            <Styles.ButtonBlock
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <Button
                onClick={onClick}
                text={buttonText}
                width={inboxMessage ? 190 : 254}
              />

              {inboxMessage && <InboxMessage inboxMessage={inboxMessage} />}
            </Styles.ButtonBlock>
          </Styles.CardContent>
        </Responsive.Desktop>

        <Responsive.NotDesktop>
          <Styles.CardContent>
            <Styles.Location>
              <Responsive.Mobile>
                <Icon.Location width={7} height={10} />
              </Responsive.Mobile>

              <Responsive.Tablet>
                <Icon.Location />
              </Responsive.Tablet>

              <Styles.City>
                <EllipsisText width={200} position="top">
                  {city}
                </EllipsisText>
              </Styles.City>
            </Styles.Location>

            <Styles.TextContent>{text}</Styles.TextContent>
          </Styles.CardContent>
        </Responsive.NotDesktop>
      </Styles.CardContainer>
    </Styles.Card>
  );
};

export { ProductCard };
