import { IArgTypes } from 'types';

import { IModal } from './types';

export const argTypes: IArgTypes<IModal> = {
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
  withoutBg: {
    name: 'withoutBg',
    type: { name: 'boolean' },
    description: 'Without white background',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
  },
  hideButtonClose: {
    name: 'hideButtonClose',
    type: { name: 'boolean' },
    description: 'Without icon close',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
  },
};
