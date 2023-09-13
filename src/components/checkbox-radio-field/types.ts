export interface FormValues {
  gender: string;
  size: string[];
}

export interface IFilterCheckbox {
  name: string;
  label: string;
  categoryId: string;
  subCategoryId: string;
  isOpenCategory?: boolean;
  hiddenCheckbox?: boolean;
  type?: 'checkbox' | 'radio' | 'input';
}
