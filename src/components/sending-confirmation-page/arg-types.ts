import { IArgTypes } from 'types';

export const argTypes: IArgTypes<{ title: string; text: string }> = {
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
