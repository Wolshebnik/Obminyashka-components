import { IArgTypes } from 'types';
import { IBtnCatygoryProps } from './types';

export const argTypes: IArgTypes<IBtnCatygoryProps> = {
  top: {
    name: 'top',
    type: { name: 'number' },
    description: 'top',
    table: {
      type: { summary: 'number' },
    },
  },
  left: {
    name: 'left',
    type: { name: 'number' },
    description: 'left',
    table: {
      type: { summary: 'number' },
    },
  },
  text: {
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
