import { IArgTypes } from 'types';
import { IBtnCategoryProps } from './types';

export const argTypes: IArgTypes<IBtnCategoryProps> = {
  textBtn: {
    name: 'text',
    type: { name: 'string' },
    description: 'button text',
    table: {
      type: { summary: 'string' },
    },
  },
  isDisabled: {
    name: 'isDisabled',
    type: { name: 'boolean' },
    description: 'makes button disabled',
    table: {
      type: { summary: 'boolean' },
    },
  },
};
