import { IArgTypes } from 'types';

import { ITitle } from './types';

export const argTypes: IArgTypes<ITitle> = {
  title: {
    name: 'title',
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
      type: { summary: 'string' },
    },
  },
};
