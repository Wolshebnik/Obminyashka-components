import { IArgTypes } from 'types';

import { ILogo } from './types';

export const argTypes: IArgTypes<ILogo> = {
  onClick: {
    name: 'onClick',
    type: { name: 'function' },
    description: 'Function for navigate',
    table: {
      type: { summary: 'function' },
    },
  },

  inFooter: {
    name: `inFooter`,
    type: { name: 'boolean' },
    description:
      'Property from which the type of the Logo element changes. Boolean.',
    table: {
      type: { summary: 'boolean' },
    },
    controls: 'boolean',
  },
};
