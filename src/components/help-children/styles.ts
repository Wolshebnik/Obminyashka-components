import styled, { css } from 'styled-components';

export const HelpChildren = styled.div`
  display: block;
  border-radius: 130px;

  ${({ theme }) => css`
    background: ${theme.colors.helpChildren.bg};

    ${theme.responsive.isMobile &&
    css`
      padding: 59px 60px 82px;
      margin-bottom: 50px;
    `}

    ${theme.responsive.isTablet &&
    css`
      padding: 42px 55px 72px 52px;
      margin-bottom: 70px;
    `}

    ${theme.responsive.isTabletUp &&
    css`
      padding: 42px 109px 86px 52px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      padding: 52px 126px 36px 128px;
      margin-bottom: 130px;
    `}
  `}
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.responsive.isMobile &&
    css`
      padding-bottom: 30px;
    `}

    ${theme.responsive.isTablet &&
    css`
      padding-bottom: 38px;
    `}

    ${theme.responsive.isTabletUp &&
    css`
      padding-bottom: 70px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      padding-bottom: 48px;
    `}
  `}
`;

export const Text = styled.p`
  line-height: 23px;
  font-family: 'Proxima Nova', sans-serif;

  ${({ theme }) => css`
    color: ${theme.colors.blackColorText};

    ${theme.responsive.isMobile &&
    css`
      font-size: 14px;
      /* width: 228px; */
      margin: 0 auto 8px;
    `}
  `}
`;

export const StylizedBtn = styled.div`
  button {
    gap: 0;
    width: inherit;
    height: inherit;
    line-height: 23px;
    border-radius: 30px;

    ${({ theme }) => css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.btnBlue};

      :hover {
        background-color: ${theme.colors.btnBlueActive};
      }

      ${theme.responsive.isMobile &&
      css`
        font-size: 14px;
        padding: 9px 10px;
        margin: 0 auto;
      `}

      ${theme.responsive.isTablet &&
      css`
        font-size: 16px;
        padding: 13px 21px;
        margin: 0;
      `}

      ${theme.responsive.isDesktop &&
      css`
        font-size: 18px;
        padding: 14px 22px;
      `}
    `}

    span {
      margin-right: 10px;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 1251px;
`;
