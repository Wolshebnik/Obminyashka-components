import styled, { css, DefaultTheme } from 'styled-components';

import { IStyledLanguageSelection } from './types';

export const LanguagePanel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 10px 0 0;
`;

export const LanguageItem = styled.div<IStyledLanguageSelection>`
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-transform: uppercase;
  padding: 5px;
  margin: 18px 0 10px 0;
  cursor: pointer;
  border-radius: 50%;

  ${({ checked, theme }) => css`
    color: ${checked
      ? theme.colors.selectLanguage.colorChecked
      : theme.colors.selectLanguage.color};
    border: ${checked
      ? `1px solid ${theme.colors.selectLanguage.border};`
      : 'none'};

    &:hover {
      background-color: ${theme.colors.selectLanguage.backgroundHover};
      color: ${theme.colors.selectLanguage.colorHover};
    }
  `}
`;
