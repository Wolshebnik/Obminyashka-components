import styled, { css } from 'styled-components';

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
  padding: 5px;
  margin: 18px 0 10px 0;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-transform: uppercase;
  border-radius: 50%;
  cursor: pointer;

  ${({ checked, theme }) => css`
    color: ${checked
      ? theme.colors.language.colorChecked
      : theme.colors.language.color};
    border: ${checked ? `1px solid ${theme.colors.language.border};` : 'none'};

    &:hover {
      background-color: ${theme.colors.language.backgroundHover};
      color: ${theme.colors.language.colorHover};
    }
  `}
`;
