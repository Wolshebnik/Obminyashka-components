import styled, { css } from 'styled-components';

export const LanguagePanel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 4px;
  width: fit-content;
  text-transform: uppercase;
  cursor: pointer;
  font: normal 700 16px/22px 'Open Sans', sans-serif;

  ${({ theme }) => css`
    color: ${theme.colors.languageNew.main};

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
  
}`;

export const Language = styled.p<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    color: ${checked && theme.colors.languageNew.checked};
  `}
`;
