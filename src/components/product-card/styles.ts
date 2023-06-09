import styled, { css, keyframes } from 'styled-components';

import * as Icon from '../icon';

const shimmerAnimation = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -60% 0;
  }
`;

export const Card = styled.div<{ margin?: string; isButtonHovered: boolean }>`
  position: relative;
  width: 164px;
  height: 260px;
  border-radius: 10px;

  ${({ theme, margin, isButtonHovered }) => css`
    background-color: ${theme.colors.white};
    ${margin && `margin: ${margin}`};
    border: 1px dashed ${theme.colors.productCard.borderCard};

    ${theme.responsive.isTablet &&
    css`
      width: 300px;
      height: 330px;
      border: 2px dashed ${theme.colors.productCard.borderCard};
      border-radius: 20px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 335px;
      height: 420px;
      border: 2px dashed ${theme.colors.productCard.borderCard};
      border-radius: 20px;

      &:hover:before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 20px;
        background-image: linear-gradient(
          45deg,
          transparent,
          transparent 40%,
          white 40%,
          white 50%,
          transparent 50%,
          transparent
        );
        background-repeat: no-repeat;
        background-size: 250% 100%;
        transition: opacity 0s ease;
        animation: ${shimmerAnimation} 2.5s linear infinite;
        z-index: 2;
      }

      &:hover {
        border-color: ${theme.colors.productCard.borderCardHovered};
      }

      ${isButtonHovered &&
      css`
        &:before {
          display: none;
        }

        &:hover {
          border-color: ${theme.colors.productCard.borderCard};
        }
      `}
    `}
  `}
`;

export const FavoriteMarker = styled.span<{ isFavorite?: boolean }>`
  position: absolute;
  left: 50%;
  top: 0;
  width: 26px;
  height: 24px;
  border-radius: 0 0 25px 25px;
  transform: translate(-50%);
  transition: background-color 0.3s ease;
  z-index: 4;

  ${({ theme, isFavorite = false }) => css`
    background-color: ${isFavorite
      ? theme.colors.productCard.markerTrueDefault
      : theme.colors.productCard.markerFalseDefault};

    &:hover {
      cursor: pointer;
      background-color: ${isFavorite
        ? theme.colors.productCard.markerTrueHover
        : theme.colors.productCard.markerFalseHover};
    }

    &:active {
      cursor: pointer;
      background-color: ${isFavorite
        ? theme.colors.productCard.markerTrueActive
        : theme.colors.productCard.markerFalseHover};
    }

    ${theme.responsive.isTablet &&
    css`
      width: 48px;
      height: 44px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 55px;
      height: 50px;
    `}
  `}
`;

export const FavoriteStarWrapper = styled.div<{ isFavorite?: boolean }>`
  path {
    fill: ${({ isFavorite, theme }) =>
      isFavorite ? theme.colors.btnBlue : theme.colors.white};
  }
`;

export const FavoriteStar = styled(Icon.FavoriteStar)`
  display: block;
  margin: 5px auto;
  width: 14px;
  height: 14px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      margin: 10px auto;
      width: 24px;
      height: 22px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin: 12px auto;
      width: 32px;
      height: 26px;
    `}
  `}
`;

export const Picture = styled.img`
  position: relative;
  display: block;
  margin: 0 auto;
  height: 158px;
  border-radius: 19px 19px 0 0;
  object-fit: cover;
  z-index: 3;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      height: 215px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      height: 245px;
      margin-bottom: 16px;
    `}
  `}
`;

export const CardContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const TextContent = styled.h6`
  display: -webkit-box;
  margin: 7px 0 23px;
  width: 115px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;

  ${({ theme }) => css`
    color: ${theme.colors.blackColorText};

    ${theme.responsive.isTablet &&
    css`
      margin: 16px 0 34px;
      width: 210px;
      font-size: 14px;
      line-height: 16px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin: 16px 0 12px;
      width: 235px;
      font-size: 16px;
      line-height: 19px;
    `}
  `}
`;

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    ${theme.responsive.isDesktop &&
    css`
      margin-bottom: 25px;
    `}
  `}
`;

export const CitySpan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  max-width: 120px;
  font-size: 8px;
  line-height: 11px;
  z-index: 1;

  ${({ theme }) => css`
    color: ${theme.colors.btnBlueHover};

    ${theme.responsive.isTablet &&
    css`
      font-size: 12px;
      line-height: 21px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      font-size: 14px;
      line-height: 24px;
    `}
  `}
`;

export const ButtonBlock = styled.div`
  display: flex;
  margin-bottom: 25px;
`;
