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

export const ButtonBlock = styled.div`
  display: flex;
  margin: 0 auto;
  order: 3;
`;

export const Card = styled.div<{ margin?: string }>`
  position: relative;
  width: 164px;
  height: 260px;
  border-radius: 10px;

  ${({ theme, margin }) => css`
    ${margin && `margin: ${margin}`};
    background-color: ${theme.colors.white};
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
      height: 420px;
      border: 2px dashed ${theme.colors.productCard.borderCard};
      border-radius: 20px;

      &:hover:after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 20px;
        background: linear-gradient(
          45deg,
          transparent 30%,
          ${theme.colors.white},
          ${theme.colors.white},
          transparent 50%
        );
        background-repeat: no-repeat;
        background-size: 300% 100%;
        transition: opacity 0s ease;
        animation: ${shimmerAnimation} 3s linear infinite;
        z-index: 2;
      }

      ${theme.responsive.isDesktopXS &&
      css`
        width: 300px;
      `}

      ${theme.responsive.isDesktopMD &&
      css`
        width: 334px;
      `}

      ${theme.responsive.isDesktopLG &&
      css`
        width: 370px;
      `}

      ${theme.responsive.isDesktopBS &&
      css`
        width: 334px;
      `}

      &:hover {
        border-color: ${theme.colors.productCard.borderCardHovered};
      }

      &:has(${ButtonBlock}:hover):after {
        display: none;
      }

      &:has(${ButtonBlock}:hover) {
        border-color: ${theme.colors.productCard.borderCard};
      }
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

export const StylizedAvatar = styled.div`
  position: absolute;
  left: 51%;
  top: 3px;
  border-radius: 25px;
  transform: translate(-50%);
`;

export const CardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  z-index: 3;
`;

export const Picture = styled.img`
  display: block;
  height: 158px;
  width: 100%;
  border-radius: 19px 19px 0 0;
  object-fit: cover;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      height: 215px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      height: 244px;
    `}
  `}
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px 23px;
  width: 100%;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      padding: 0 45px 34px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      padding: 0 40px 24px;
    `}
  `}
`;

export const TextContent = styled.h6`
  display: -webkit-box;
  margin: 0 auto;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  order: 2;

  ${({ theme }) => css`
    color: ${theme.colors.blackColorText};

    ${theme.responsive.isTablet &&
    css`
      margin: 0 auto;
      font-size: 14px;
      line-height: 16px;
      order: 2;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin: 0 auto 10px;
      width: 235px;
      font-size: 16px;
      line-height: 19px;
      order: 1;
    `}
  `}
`;

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7px;
  order: 1;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      margin-bottom: 12px;
      order: 1;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-bottom: 20px;
      height: 16px;
      order: 1;
    `}
  `}
`;

export const City = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  max-width: 120px;
  font-size: 8px;
  line-height: 11px;

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
