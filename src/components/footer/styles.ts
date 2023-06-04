import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { footerMobile, footer } from 'components/img';

export const linkStyles = css`
  display: block;
  padding-bottom: 12px;
  font-size: 12px;
  line-height: 18px;
  text-decoration: none;

  &:last-child {
    padding-bottom: 0;
  }

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      padding-bottom: 20px;
      font-size: 14px;
      line-height: 24px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      padding-bottom: 24px;
      font-size: 18px;
      line-height: 24px;
    `}
  `}
`;

export const Container = styled.div`
  position: relative;
  margin-top: auto;
  background-image: url(${footerMobile});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  ${({ theme }) => css`
    color: ${theme.colors.footerColors.white};

    ${!theme.responsive.isMobile &&
    css`
      background-image: url(${footer});
    `}
  `}
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 78px 15px 0;
  width: 100%;
  max-width: 1920px;
  overflow: hidden;
`;

export const Blocks = styled.ul`
  display: flex;
  flex-direction: column;

  ${({ theme }) =>
    !theme.responsive.isMobile &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}
`;

export const Lists = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

export const Span = styled.span`
  display: inline-block;
  margin: 20px 0;

  > svg {
    width: 20px;
    height: 20px;
  }

  ${({ theme }) =>
    !theme.responsive.isMobile &&
    css`
      margin-bottom: 44px;
      > svg {
        width: 25px;
        height: 25px;
      }
    `}
`;

export const Contact = styled.a`
  ${linkStyles}
`;

export const FootLink = styled(Link)`
  ${linkStyles}
`;

export const CopyContainer = styled.div`
  padding: 8px 0 55px;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;

  ${({ theme }) => css`
    color: ${theme.colors.footerColors.colorText};

    ${!theme.responsive.isMobile &&
    css`
      padding: 16px 0 63px;
      font-size: 14px;
    `}
  `}
`;

export const SpanCopy = styled.span`
  padding-right: 20px;
`;

export const LogoWrap = styled.span`
  padding-bottom: 16px;

  ${({ theme }) =>
    theme.responsive.isDesktop &&
    css`
      padding-bottom: 12px;
    `}
`;
