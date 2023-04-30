import { IArgTypes } from 'types';

import { IHelpChildren } from './types';

export const argTypes: IArgTypes<IHelpChildren> = {
  title: {
    name: 'title',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  name: {
    name: 'name',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  text: {
    name: 'text',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  buttonText: {
    name: 'buttonText',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
};
