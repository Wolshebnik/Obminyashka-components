import styled, { css } from 'styled-components';

import { ILanguagePanel } from './types';

export const LanguagePanel = styled.div<ILanguagePanel>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 4px;
  text-transform: uppercase;
  cursor: pointer;
  font: normal 700 20px/27px 'Open Sans', sans-serif;
  ${({ theme, fontSize, lineHeight }) => css`
    font-size: ${fontSize ? fontSize : '20px'};
    line-height: ${lineHeight ? lineHeight : '27px'};
    color: ${theme.colors.languageNew.main};
  `}
`;

export const Language = styled.p<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    color: ${checked && theme.colors.languageNew.checked};
  `}
`;
