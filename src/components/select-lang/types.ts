export interface ILanguageSelection {
  lang: string;
  fontSize?: number;
  lineHeight?: number;
  onClick: (lang: IOnClickArg) => void;
}

export interface IOnClickArg {
  lang: string;
}

export interface ILanguagePanel {
  fontSize?: number;
  lineHeight?: number;
}
