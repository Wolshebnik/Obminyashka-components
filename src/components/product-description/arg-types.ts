import { IArgTypes } from 'types';

import { IProductDescription } from './types';

export const argTypes: IArgTypes<IProductDescription> = {
  title: {
    name: 'title',
    type: { name: 'string', required: true },
    description: 'title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Title' },
    },
  },
  description: {
    name: 'description',
    type: { name: 'string', required: true },
    description: 'description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'description' },
    },
  },
};
