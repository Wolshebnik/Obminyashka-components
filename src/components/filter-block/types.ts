type Types = 'radio' | 'checkbox' | 'input';

export interface ICategory {
  type?: Types;
  categoryName: string;
  categoryActive?: string;
  hiddenCheckbox?: boolean;
  subCategories: ISubCategoryData[];
  getCities?: (id: string) => Promise<ISubCategoryData[]>;
}
export interface ISubCategory {
  type?: Types;
  categoryName: string;
  containerName?: string;
  subCategoryName: string;
  hiddenCheckbox?: boolean;
  getCities?: (id: string) => Promise<ISubCategoryData[]>;
}

export interface ICategoryFilterData {
  title: string;
  categoryActive?: string;
  categoryFilterData: ICategoryData[];
  getCities?: (id: string) => Promise<ISubCategoryData[]>;
}
export interface ICategoryData {
  id: string;
  name: string;
  type?: Types;
  hiddenCheckbox?: boolean;
  subCategories: ISubCategoryData[];
}

export interface ISubCategoryData {
  id: string;
  name: string;
  containerName?: string;
}

export interface ISelectedData {
  id: string;
  name: string;
}
