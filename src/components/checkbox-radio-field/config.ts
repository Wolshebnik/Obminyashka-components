import { FormValues, IFilterCheckbox } from './types';

export const initialValues: FormValues = {
  gender: '',
  size: [],
  text: '',
};

export const checkboxes: IFilterCheckbox[] = [
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
  {
    name: 'size',
    label: 'size 40',
    type: 'checkbox',
    hiddenCheckbox: true,
  },
  {
    name: 'size',
    label: 'size 50',
    type: 'checkbox',
    hiddenCheckbox: true,
  },
];
