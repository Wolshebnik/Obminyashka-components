export interface FormValues {
  text: string;
  gender: string;
  size: string[];
}

export interface IFilterCheckbox {
  name: string;
  label: string;
  isOpenCategory?: boolean;
  hiddenCheckbox?: boolean;
  type?: 'checkbox' | 'radio' | 'input';
}
