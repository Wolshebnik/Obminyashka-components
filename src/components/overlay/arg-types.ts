import { IArgTypes } from 'types';

import { IOverlay } from './types';

export const argTypes: IArgTypes<IOverlay> = {
  isOpen: {
    name: 'isOpen',
    type: { name: 'boolean', required: true },
    description: 'Open modal',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
  },
  onClose: {
    name: 'onClose',
    type: { name: 'function', required: true },
    description: 'Close modal',
    table: {
      defaultValue: { summary: true },
      type: { summary: 'function' },
    },
  },
  delay: {
    name: 'delay',
    type: { name: 'number' },
    description: 'Time of close and open',
    table: {
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
};
