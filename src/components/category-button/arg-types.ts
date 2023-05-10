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
};
