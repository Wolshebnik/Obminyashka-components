import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { IWindowWidth } from './types';

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideLink = styled(Link)`
  position: relative;
  width: 100%;
  outline: none;
`;

export const SlideImage = styled.img<IWindowWidth>`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;

  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      height: 200px;
    `}

    ${theme.responsive.isTablet &&
    css`
      height: 284px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      height: 310px;
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

  :active {
    transform: scale(1.05);
  }

  ${({ theme }) => css`
    color: ${theme.colors.white};

    ${theme.responsive.isMobile &&
    css`
      font-size: 16px;
      line-height: 23px;
    `}
  `}
`;

export const SlideTitle = styled.b`
  font-size: 45px;
  line-height: 55px;
  text-transform: uppercase;
  font-family: Balsamiq Sans, cursive;

  ${({ theme }) => css`
    color: ${theme.colors.white};

    ${theme.responsive.isMobile &&
    css`
      font-size: 27px;
      line-height: 42px;
    `}
  `}
`;

export const StoryWrapper = styled.div`
  margin: 0 auto;
  max-width: 1830px;
`;
