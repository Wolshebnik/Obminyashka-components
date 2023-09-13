import { FormValues, IFilterCheckbox } from './types';

export const initialValues: FormValues = {
  gender: '',
  size: [],
};

export const checkboxes: IFilterCheckbox[] = [
  {
    name: 'gender',
    label: 'both',
    type: 'radio',
    categoryId: '2',
    subCategoryId: '8',
  },
  {
    name: 'gender',
    label: 'male',
    type: 'radio',
    categoryId: '2',
    subCategoryId: '9',
  },
  {
    name: 'gender',
    label: 'female',
    type: 'radio',
    categoryId: '2',
    subCategoryId: '10',
  },
  {
    name: 'size',
    label: 'size 10',
    type: 'checkbox',
    categoryId: '1',
    subCategoryId: '11',
  },
  {
    name: 'size',
    label: 'size 20',
    type: 'checkbox',
    categoryId: '1',
    subCategoryId: '12',
  },
  {
    name: 'size',
    label: 'size 30',
    type: 'checkbox',
    categoryId: '1',
    subCategoryId: '13',
  },
  {
    name: 'size',
    label: 'size 40',
    type: 'checkbox',
    hiddenCheckbox: true,
    categoryId: '1',
    subCategoryId: '14',
  },
  {
    name: 'size',
    label: 'size 50',
    type: 'checkbox',
    hiddenCheckbox: true,
    categoryId: '1',
    subCategoryId: '15',
  },
];
