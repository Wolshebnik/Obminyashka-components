import styled, { css } from 'styled-components';
import { ILanguagePanel } from './types';

export const LanguagePanel = styled.div<ILanguagePanel>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 4px;
  text-transform: uppercase;
  cursor: pointer;

  ${({ theme, fontSize, lineHeight }) => css`
    font: normal 700 ${fontSize ? fontSize : '20px'} /
        ${lineHeight ? lineHeight : '27px'} 'Open Sans',
      sans-serif;
    color: ${theme.colors.languageNew.main};
  `}
`;

export const Language = styled.p<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    color: ${checked && theme.colors.languageNew.checked};
  `}
`;
