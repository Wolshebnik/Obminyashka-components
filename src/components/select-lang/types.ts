import { DefaultTheme } from 'styled-components';

export interface ILanguageSelection {
  lang: string;
  onClick: (el: { lang: string }) => void;
}

export interface IStyledLanguageSelection {
  checked: boolean;
  theme: DefaultTheme;
}
