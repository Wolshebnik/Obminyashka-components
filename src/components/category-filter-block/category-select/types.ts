export interface ICategoriesData {
  id: number;
  title: string;
  isOpen: boolean;
  options: ISubCategoriesData[];
  setOpen: (num: number) => void;
}

export interface ISubCategoriesData {
  id: number;
  name: string;
}

export interface MockData {
  id: number;
  title: string;
  options: ISubCategoriesData[];
}
