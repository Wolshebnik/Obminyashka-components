interface Types {
  type: 'radio' | 'checkbox' | 'input';
}

export interface ISubCategory {
  name: string;
  label: string;
  hiddenCheckbox?: boolean;
  type: Types;
}
export interface IDataSubCategory {
  label: string;
}
export interface ICategory {
  categoryTitle: string;
  hiddenCheckbox?: boolean;
  subCategories: IDataSubCategory[];
  type: Types;
}
export interface ICategoryData {
  title: string;
  categories: ICategory[];
}
