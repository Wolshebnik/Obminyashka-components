import { IArgTypes } from 'types';

import { IResetAllButton } from './types';

export const argTypes: IArgTypes<IResetAllButton> = {
  text: {
    name: 'text',
    type: { name: 'string', required: true },
    description: 'Button name',
    table: {
      type: { summary: 'string' },
    },
  },
  onClick: {
    name: 'onClick',
    type: { name: 'function' },
    description: 'Reset all option',
    table: {
      type: { summary: 'function' },
    },
    action: 'onClick',
  },
};
