import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const SwiperWrapper = styled.div`
  margin: 50px 0;
`;

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 345px;
  height: 176px;
  object-fit: cover;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 450px;
      height: 230px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 402px;
      height: 230px;
    `}
  `}
`;

export const SlideLink = styled(Link)`
  position: relative;
  outline: none;
`;

export const SlideImage = styled.img`
  width: 345px;
  height: 176px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 450px;
      height: 230px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 402px;
      height: 230px;
    `}
  `}
`;

export const SlideText = styled.span`
  position: absolute;
  top: 16px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 287px;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.white};

  :active {
    transform: scale(1.05);
  }
`;

export const SlideTitle = styled.b`
  color: ${({ theme }) => theme.colors.white};
  font-size: 27px;
  line-height: 42px;
  text-transform: uppercase;
  font-family: Balsamiq Sans, cursive;
`;

export const StoryWrapper = styled.div`
  max-width: 1920px;
`;
