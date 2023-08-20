import { FormValues, INewCheckbox } from './types';

export const initialValues: FormValues = {
  gender: '',
  size: [],
};

export const checkboxes: INewCheckbox[] = [
  {
    name: 'gender',
    label: 'both',
    type: 'radio',
  },
  {
    name: 'gender',
    label: 'male',
    type: 'radio',
  },
  {
    name: 'gender',
    label: 'female',
    type: 'radio',
  },
  {
    name: 'size',
    label: 'size 10',
    type: 'checkbox',
  },
  {
    name: 'size',
    label: 'size 20',
    type: 'checkbox',
  },
  {
    name: 'size',
    label: 'size 30',
    type: 'checkbox',
  },
];
