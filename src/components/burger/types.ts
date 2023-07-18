export interface IBurger {
  lang: string;
  duration?: number;
  data: BurgerProps[];
  onSelectLanguage: (lang: IOnClickArg) => void;
}

export interface BurgerProps {
  to: string;
  text: string;
  icon?: boolean;
  mobile?: boolean;
}

export interface IOnClickArg {
  lang: string;
}
