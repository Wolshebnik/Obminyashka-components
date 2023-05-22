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

  setClose: {
    name: 'setClose',
    type: { name: 'function', required: true },
    description: 'Close modal',
    table: {
      defaultValue: { summary: true },
      type: { summary: 'function' },
    },
  },

  duration: {
    name: 'duration',
    type: { name: 'number' },
    description: 'Time of close and open',
    table: {
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },

  top: {
    name: 'top',
    type: { name: 'number' },
    description: 'Position top of element',
    table: {
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },

  isHeader: {
    name: 'isHeader',
    type: { name: 'boolean' },
    description: 'Below header, change z-Index',
    table: {
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },

  isAnimation: {
    name: 'isAnimation',
    type: { name: 'boolean', required: true },
    description: 'Start of animation close',
    table: {
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },

  childRef: {
    name: 'childRef',
    tags: ['autodocs'],
    description:
      "Referens to object which will be clickable and won't close the overlay",
    table: {
      type: { summary: 'RefObject<HTMLDivElement> ' },
    },
    control: { type: 'RefObject<HTMLDivElement> ' },
  },
};
