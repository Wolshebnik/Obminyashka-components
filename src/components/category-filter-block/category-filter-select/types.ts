export interface ICategoriesData {
  id: number;
  title: string;
  isOpen?: boolean;
  disabled?: string[];
  isClothesShoes?: string;
  options: ISubCategoriesData[];
  setOpen?: (num: number) => void;
  setIsClothesShoes?: (str: string) => void;
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
