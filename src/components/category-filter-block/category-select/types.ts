export interface ICategoriesData {
  id: number;
  title: string;
  openCategory: number;
  subCategories: ISubCategoriesData[];
  setOpenCategory: (num: number) => void;
}

export interface ISubCategoriesData {
  id: number;
  name: string;
}

export interface MockData {
  id: number;
  title: string;
  subCategories: ISubCategoriesData[];
}
