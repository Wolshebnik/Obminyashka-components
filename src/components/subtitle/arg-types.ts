import { IArgTypes } from 'types';

import { ISubtitle } from './types';

export const argTypes: IArgTypes<ISubtitle> = {
  textTitle: {
    name: 'text',
    type: { name: 'string' },
    description: 'Text',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Title' },
    },
  },
  hiddenStar: {
    name: 'hiddenStar',
    type: { name: 'boolean' },
    description: 'hiddenStar',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
    },
  },
};
