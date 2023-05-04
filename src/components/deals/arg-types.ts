import { IArgTypes } from 'types';

import { IDeals } from './types';

export const argTypes: IArgTypes<IDeals> = {
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

  heartIcon: {
    name: 'heartIcon',
    type: { name: 'boolean' },
    description: 'Icon',
    table: {
      type: { summary: 'boolean' },
    },
  },

  puzzleIcon: {
    name: 'puzzleIcon',
    type: { name: 'boolean' },
    description: 'Icon',
    table: {
      type: { summary: 'boolean' },
    },
  },

  background: {
    name: 'background',
    type: { name: 'boolean' },
    description: 'Background',
    table: {
      type: { summary: 'boolean' },
    },
  },
};
