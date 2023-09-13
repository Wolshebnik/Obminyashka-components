type Types = 'radio' | 'checkbox' | 'input';

export interface ICategory {
  type?: Types;
  open: number;
  name: string;
  title: string;
  categoryId: string;
  categoryIndex: number;
  categoryBlock?: boolean;
  categoryActive?: string;
  hiddenCheckbox?: boolean;
  setOpen: (num: number) => void;
  subCategories: ISubCategoryData[];
  getCities?: (id: string) => Promise<ISubCategoryData[]>;
}
export interface ISubCategory {
  type?: Types;
  name: string;
  categoryId: string;
  subCategoryId: string;
  containerName?: string;
  subCategoryName: string;
  isOpenCategory: boolean;
  hiddenCheckbox?: boolean;
  getCities?: (id: string) => Promise<ISubCategoryData[]>;
}

export interface ICategoryFilterData {
  title: string;
  categoryBlock?: boolean;
  categoryActive?: string;
  categoryFilterData: ICategoryData[];
  getCities?: (id: string) => Promise<ISubCategoryData[]>;
}
export interface ICategoryData {
  id: string;
  name: string;
  type?: Types;
  title: string;
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
