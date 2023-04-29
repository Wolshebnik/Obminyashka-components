import styled, { css } from 'styled-components';

export const LanguagePanel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 4px;
  width: fit-content;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

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
