import styled, { css } from 'styled-components';

import * as Icon from '../icon';

export const Card = styled.div<{ margin?: number }>`
  position: relative;
  width: 290px;
  height: 419px;
  border-radius: 20px;
  -webkit-box-shadow: 0 7px 10px 0 rgba(48, 50, 50, 0.5);
  -moz-box-shadow: 0 7px 10px 0 rgba(48, 50, 50, 0.5);
  box-shadow: 0 7px 10px 0 rgba(48, 50, 50, 0.5);

  ${({ theme, margin }) => css`
    background-color: ${theme.colors.white};
    margin: ${margin ? `${margin}px` : 0};
    border: 2px dotted ${theme.colors.itemCard.borderCard};
  `}
`;

export const FavoriteMarker = styled.span<{ isFavorite?: boolean }>`
  position: absolute;
  left: 50%;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 0 0 25px 25px;
  transform: translate(-50%);
  transition: background-color 0.3s ease;

  ${({ theme, isFavorite = false }) => css`
    background-color: ${isFavorite
      ? theme.colors.itemCard.avatarTrueDefault
      : theme.colors.itemCard.avatarFalseDefault};

    &:hover {
      cursor: pointer;
      background-color: ${isFavorite
        ? theme.colors.itemCard.avatarTrueHover
        : theme.colors.itemCard.avatarFalseHover};
    }

    &:active {
      cursor: pointer;
      background-color: ${isFavorite
        ? theme.colors.itemCard.avatarTrueActive
        : theme.colors.itemCard.avatarFalseHover};
    }
  `}
`;

export const DivPicture = styled.div`
  width: 286px;
  height: 242px;
`;

export const Picture = styled.img`
  font-size: 0;
  border-radius: 19px 19px 0 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 44px 0;
`;

export const TextContent = styled.h6`
  height: 37px;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.blackColorText};
  text-align: center;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`;

export const LocationIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px 0 20px;
  text-align: center;
`;

export const CitySpan = styled.span`
  position: relative;
  max-width: 120px;
  margin-left: 8px;
  font-size: 14px;
  z-index: 1;
  color: ${({ theme }) => theme.colors.btnBlueHover};
`;

export const ButtonBlock = styled.div`
  display: flex;
`;

export const StylizedAvatar = styled.div`
  position: absolute;
  left: 50%;
  top: 4px;
  border-radius: 25px;
  transform: translate(-50%);
`;

export const FavoriteStar = styled(Icon.FavoriteStar)`
  display: inline-block;
  width: 100%;
  margin: 11px auto;
`;

export const FavoriteStarWrapper = styled.div<{ isFavorite?: boolean }>`
  path {
    fill: ${({ isFavorite, theme }) =>
      isFavorite ? theme.colors.btnBlue : theme.colors.white};
  }
`;
