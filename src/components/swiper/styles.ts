import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { IWindowWidth } from './types';

export const SwiperWrapper = styled.div<IWindowWidth>`
  margin: 50px 0;

  ${({ theme, windowWidth }) => css`
    ${theme.responsive.isTablet &&
    css`
      margin: 72px 0;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin: 130px 0;
    `}

    ${windowWidth > 1365 &&
    windowWidth < 1600 &&
    theme.responsive.isDesktop &&
    css`
      margin: 72px 0;
    `}
  `}
`;

export const SlideWrapper = styled.div<IWindowWidth>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideLink = styled(Link)`
  position: relative;
  outline: none;
`;

export const SlideImage = styled.img<IWindowWidth>`
  ${({ theme, windowWidth }) => css`
    ${theme.responsive.isMobile &&
    css`
      width: 345px;
      height: 176px;
    `}

    ${theme.responsive.isTablet &&
    css`
      width: 450px;
      height: 230px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 426px;
      height: 310px;
    `}

    ${windowWidth < 1600 &&
    theme.responsive.isDesktop &&
    css`
      width: 402px;
      height: 230px;
    `}

    ${windowWidth > 1599 &&
    windowWidth < 1920 &&
    theme.responsive.isDesktop &&
    css`
      width: 420px;
      height: 270px;
    `}
  `}
`;

export const SlideText = styled.span`
  position: absolute;
  top: 12px;
  left: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 355px;
  font-size: 22px;
  line-height: 30px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};

  :active {
    transform: scale(1.05);
  }

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      font-size: 16px;
      line-height: 23px;
    `}
  `}
`;

export const SlideTitle = styled.b`
  color: ${({ theme }) => theme.colors.white};
  font-size: 45px;
  line-height: 55px;

  text-transform: uppercase;
  font-family: Balsamiq Sans, cursive;

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      font-size: 27px;
      line-height: 42px;
    `}
  `}
`;

export const StoryWrapper = styled.div`
  max-width: 1830px;
`;
