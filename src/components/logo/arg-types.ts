import { IArgTypes } from 'types';

import { ILogo } from './types';

export const argTypes: IArgTypes<ILogo> = {
  to: {
    name: 'to',
    type: { name: 'string' },
    description: 'Link',
    table: {
      type: { summary: 'string' },
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
  inFooterOAuth: {
    name: `inFooterOAuth`,
    type: { name: 'boolean' },
    description:
      'Property from which the type of the Logo element changes. Boolean.',
    table: {
      type: { summary: 'boolean' },
    },
    controls: 'boolean',
  },
};
