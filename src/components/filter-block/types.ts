export interface ISubCategory {
  name?: string;
  label: string;
  hiddenCheckbox?: boolean;
  type?: 'radio' | 'checkbox';
}
export interface ICategory {
  categoryTitle: string;
  hiddenCheckbox?: boolean;
  type?: 'radio' | 'checkbox';
  subCategories: ISubCategory[];
}
export interface ICategoryData {
  title: string;
  categories: ICategory[];
}

// export interface FormValues {
//   gender: string;
//   size: string[];
// }

// export interface IFilterCheckbox {
//   name: string;
//   label: string;
//   hiddenCheckbox?: boolean;
//   type?: 'radio' | 'checkbox';
// }
