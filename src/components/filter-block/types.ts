export interface ISubCategory {
  name?: string;
  label: string;
  hiddenCheckbox?: boolean;
  type?: 'radio' | 'checkbox' | 'input';
}
export interface ICategory {
  categoryTitle: string;
  hiddenCheckbox?: boolean;
  subCategories: ISubCategory[];
  type?: 'radio' | 'checkbox' | 'input' | 'withOutCheckbox';
}
export interface ICategoryData {
  title: string;
  categories: ICategory[];
}
