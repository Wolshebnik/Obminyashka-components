import { DefaultTheme } from 'styled-components';

export interface ILanguageSelection {
  lang: string;
  onClick: (lang: IOnClickArg) => void;
}

export interface IStyledLanguageSelection {
  checked: boolean;
  theme: DefaultTheme;
}

export interface IOnClickArg {
  lang: string;
}
