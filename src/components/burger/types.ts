export interface IBurger {
  data: BurgerProps[];
}

export interface BurgerProps {
  to: string;
  text: string;
  icon?: boolean;
}
