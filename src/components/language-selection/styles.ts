import styled, { css } from 'styled-components';

export const LanguagePanel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 4px;
  width: fit-content;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      font-size: 22px;
      line-height: 30px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      font-size: 20px;
      line-height: 27px;
    `}
  `}
`;

export const Language = styled.button<{ checked: boolean }>`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  cursor: pointer;

  ${({ theme, checked }) => css`
    color: ${checked
      ? theme.colors.languageNew.checked
      : theme.colors.languageNew.main};

    ${theme.responsive.isTablet &&
    css`
      font-size: 22px;
      line-height: 30px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      font-size: 20px;
      line-height: 27px;
    `}
  `}
`;
