export interface IBurger {
  lang: string;
  data: BurgerProps[];
  onSelectLanguage: (lang: IOnClickArg) => void;
}

export interface BurgerProps {
  to: string;
  text: string;
  icon?: boolean;
}

export interface IOnClickArg {
  lang: string;
}
