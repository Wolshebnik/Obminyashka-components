export interface IFilterData {
  id: number;
  type: 'input' | 'checkbox' | 'radio';
  title: string;
  // isOpen: boolean;
  options: ISubCategoriesData[];
  // setOpen: (num: number) => void;
}

export interface ISubCategoriesData {
  id?: number;
  name: string;
}

export interface MockData {
  id?: number;
  type: string;
  title: string;
  options: ISubCategoriesData[];
}
