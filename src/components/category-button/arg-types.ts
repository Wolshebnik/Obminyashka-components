import { IArgTypes } from 'types';
import { IBtnCategoryProps } from './types';

export const argTypes: IArgTypes<IBtnCategoryProps> = {
  textBtn: {
    name: 'text',
    type: { name: 'string' },
    description: 'button text',
    table: {
      type: { summary: 'string' },
    },
  },
  open: {
    name: 'open',
    type: { name: 'boolean' },
    description: 'boolean value',
    table: {
      type: { summary: 'boolean' },
    },
  },
  setOpen: {
    name: 'setOpen',
    type: { name: 'function' },
    description: 'set boolean value',
    table: {
      type: { summary: 'function' },
    },
  },
};
