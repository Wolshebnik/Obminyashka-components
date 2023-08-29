type Types = 'radio' | 'checkbox' | 'input';

export interface ICategory {
  type?: Types;
  categoryName: string;
  hiddenCheckbox?: boolean;
  subCategories: ISubCategoryData[];
}
export interface ISubCategory {
  type?: Types;
  categoryName: string;
  subCategoryName: string;
  hiddenCheckbox?: boolean;
}

export interface ICategoryFilterData {
  title: string;
  categories: ICategoryData[];
}
export interface ICategoryData {
  id: number;
  name: string;
  type?: Types;
  hiddenCheckbox?: boolean;
  subCategories: ISubCategoryData[];
}

export interface ISubCategoryData {
  id: number;
  name: string;
}
