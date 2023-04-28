import { IArgTypes } from 'types';

import { ImageProps } from './types';

export const argTypes: IArgTypes<ImageProps> = {
  width: {
    name: 'width',
    type: { name: 'number' },
    description: 'CSS width',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 30 },
    },
    control: { type: 'number' },
  },
  height: {
    name: 'height',
    type: { name: 'number' },
    description: 'CSS height',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 28 },
    },
    control: { type: 'number' },
  },
  source: {
    name: 'source',
    type: { name: 'string' },
    description: 'Image',
    table: {
      type: { summary: 'string' },
    },
  },
};
