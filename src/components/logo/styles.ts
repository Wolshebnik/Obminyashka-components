import styled, { css } from 'styled-components';

export const Logo = styled.div<{ inFooter?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: fit-content;
  -webkit-user-select: none;
  user-select: none;
  font-family: 'Expletus Sans', cursive;
  font-weight: 400;
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
    ${!inFooter && !theme.responsive.isMobile && `max-width: 60px;`};

    ${inFooter && `max-width: 60px;`};

    ${inFooter && theme.responsive.isDesktop && `max-width: 90px;`};
  `}
`;

export const ProjectName = styled.p<{ inFooter?: boolean }>`
  font-size: 26px;
  line-height: 35px;

  ${({ theme, inFooter }) => css`
    color: ${inFooter
      ? `${theme.colors.logo.white};`
      : `${theme.colors.logo.blue};`};

    ${inFooter &&
    `font-size: 30px;
     line-height: 40px;`};

    ${inFooter &&
    theme.responsive.isTablet &&
    `font-size: 25px;
     line-height: 33px;`};
  `}
`;
