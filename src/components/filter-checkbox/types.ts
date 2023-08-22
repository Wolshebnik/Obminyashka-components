export interface FormValues {
  gender: string;
  size: string[];
}

export interface IFilterCheckbox {
  name: string;
  label: string;
  hiddenCheckbox?: boolean;
  type?: 'radio' | 'checkbox';
}
