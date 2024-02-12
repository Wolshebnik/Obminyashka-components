import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { IFooterStyles } from './types';

export const Logo = styled(Link)<{ inFooter?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: fit-content;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;

  ${({ theme, inFooter }) => css`
    ${inFooter && `gap: 16px;`}

    ${inFooter && !theme.responsive.isMobile && `gap: 12px;`}
  `}
`;

export const ImgWrapper = styled.div<{ inFooter?: boolean }>`
  display: flex;
  max-width: 40px;

  svg {
    width: 100%;
  }

  ${({ theme, inFooter }) => css`
    ${inFooter && `max-width: 60px;`};

    ${inFooter && theme.responsive.isDesktop && `max-width: 90px;`};

    ${!inFooter && !theme.responsive.isMobile && `max-width: 60px;`};

    ${!inFooter &&
    theme.responsive.isDesktop &&
    css`
      max-width: 43px;
    `};

    ${!inFooter &&
    theme.responsive.isDesktopLG &&
    css`
      max-width: 60px;
    `};
  `}
`;

export const ProjectName = styled.p<IFooterStyles>`
  font-family: Expletus Sans, cursive;
  font-weight: 400;
  font-size: 26px;
  line-height: 35px;

  ${({ theme, inFooter, inFooterOAuth }) => css`
    color: ${inFooter
      ? `${theme.colors.logo.white};`
      : `${theme.colors.logo.blue};`};

    ${inFooter &&
    inFooterOAuth &&
    css`
      color: ${theme.colors.logo.blue};
    `}

    ${inFooter &&
    `font-size: 30px;
       line-height: 40px;`};

    ${inFooter &&
    theme.responsive.isTablet &&
    `font-size: 25px;
       line-height: 33px;`};

    ${!inFooter &&
    theme.responsive.isDesktop &&
    `font-size: 19px;
       line-height: 25px;`};

    ${!inFooter &&
    theme.responsive.isDesktopLG &&
    `font-size: 26px;
       line-height: 35px;`};
  `}
`;
