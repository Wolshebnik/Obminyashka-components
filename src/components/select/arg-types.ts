import { IArgTypes } from 'types';

import { ISelectProps } from './types';

export const argTypes: IArgTypes<ISelectProps> = {
  title: {
    name: 'title',
    type: { name: 'string' },
    description: 'title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Title' },
    },
    control: { type: 'string' },
  },
  isActive: {
    name: 'isActive',
    type: { name: 'boolean' },
    description: 'Open only one category',
    table: {
      type: { summary: 'boolean' },
    },
  },
  setIsActive: {
    name: 'setIsActive',
    type: { name: 'function' },
    description: 'Set value to open category',
    table: {
      type: { summary: 'function' },
    },
  },
  multiple: {
    name: 'multiple',
    type: { name: 'boolean' },
    description: 'If multiple, then you can choose a few categories',
    table: {
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  notCheckbox: {
    name: 'notCheckbox',
    type: { name: 'boolean' },
    description: 'subcategories is not checkbox',
    table: {
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean' },
    description: 'disabled',
    table: {
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  filtration: {
    name: 'filtration',
    type: { name: 'boolean' },
    description: 'Page change callback',
    table: {
      type: { summary: 'function' },
    },
    control: { type: 'boolean' },
  },
  isLoading: {
    name: 'isLoading',
    type: { name: 'boolean' },
    description: 'wait for Loading locations',
    table: {
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  deleteOnClose: {
    name: 'deleteOnClose',
    type: { name: 'boolean' },
    description: 'Delete subcategories after blur',
    table: {
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  onChange: {
    name: 'onChange',
    type: { name: 'function' },
    description:
      'Returns the value which is the id and the subcategories which are chosenOptions',
    table: {
      type: { summary: 'function' },
    },
  },
};
