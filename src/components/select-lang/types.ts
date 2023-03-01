import { MouseEventHandler } from 'react';
import { DefaultTheme } from 'styled-components';

export interface ILanguageItem {
  value: string;
  checked: boolean;
}

export interface ILanguageSelection {
  onClick?: MouseEventHandler<HTMLDivElement>;
  languageArray: ILanguageItem[];
}

export interface IStyledLanguageSelection {
  checked: boolean;
  theme: DefaultTheme;
}
