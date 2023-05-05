import { IArgTypes } from 'types';

import { IBurger } from './types';

export const argTypes: IArgTypes<IBurger> = {
  isOpen: {
    name: 'open',
    type: { name: 'boolean' },
    description: 'Open burger',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
};
