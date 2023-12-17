import { IArgTypes } from 'types';

import { ISuccess } from './types';

export const argTypes: IArgTypes<ISuccess> = {
  title: {
    name: 'title',
    type: { name: 'string' },
    description: 'hiddenStar',
    table: {
      type: { summary: 'string' },
    },
  },
  nameWebsite: {
    name: 'nameWebsite',
    type: { name: 'string' },
    description: 'hiddenStar',
    table: {
      type: { summary: 'string' },
    },
  },
  text: {
    name: 'text',
    type: { name: 'string' },
    description: 'hiddenStar',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
    },
  },
};
