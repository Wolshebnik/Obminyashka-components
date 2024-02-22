export interface ICategoriesData {
  id: number;
  title: string;
  disabled?: string[];
  isOpenCategory?: boolean;
  selectedCategory?: string;
  options: ISubCategoriesData[];
  setIsOpenCategory?: (num: number) => void;
  setIsSelectedCategory?: (str: string) => void;
  type: 'input' | 'checkbox' | 'radio' | 'category';
}

export interface ISubCategoriesData {
  id?: number;
  name: string;
}

export interface MockData {
  id: number;
  title: string;
  options: ISubCategoriesData[];
  type: 'input' | 'checkbox' | 'radio' | 'category';
}
