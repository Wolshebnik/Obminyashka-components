import { IArgTypes } from 'types';

import { IBurger } from './types';

export const argTypes: IArgTypes<IBurger> = {
  data: {
    to: {
      name: 'to',
      type: { name: 'string' },
      description: 'Link',
      table: {
        type: { summary: 'string' },
      },
    },

    text: {
      name: 'text',
      type: { name: 'string' },
      description: 'Text',
      table: {
        type: { summary: 'string' },
      },
    },

    icon: {
      name: 'heartIcon',
      type: { name: 'boolean' },
      description: 'Icon',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
};
