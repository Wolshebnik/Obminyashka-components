import { DefaultTheme } from 'styled-components';

export interface ILanguageSelection {
  onClick?: () => void;
  lang: string;
}

export interface IStyledLanguageSelection {
  checked: boolean;
  theme: DefaultTheme;
}
