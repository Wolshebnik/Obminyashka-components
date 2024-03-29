import { IArgTypes } from 'types';

import { ITitle } from './types';

export const argTypes: IArgTypes<ITitle> = {
  text: {
    name: 'text',
    type: { name: 'string' },
    description: 'Text',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Title' },
    },
  },
  hiddenDots: {
    name: 'hiddenDots',
    type: { name: 'boolean' },
    description: 'hiddenDots',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
    },
  },
};
