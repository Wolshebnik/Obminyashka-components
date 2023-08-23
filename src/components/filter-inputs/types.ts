export interface FormValues {
  text: string;
  gender: string;
  size: string[];
}

export interface IFilterCheckbox {
  name: string;
  label: string;
  hiddenCheckbox?: boolean;
  type: 'radio' | 'checkbox' | 'input';
}
