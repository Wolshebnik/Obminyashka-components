export interface FormValues {
  gender: string;
  size: string[];
}

export interface INewCheckbox {
  name: string;
  label: string;
  type: 'radio' | 'checkbox';
}
