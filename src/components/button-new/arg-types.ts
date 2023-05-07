import { IArgTypes } from 'types';

import { IButtonNew } from './types';

export const argTypes: IArgTypes<IButtonNew> = {
  text: {
    name: 'text',
    type: { name: 'string', required: true },
    description: 'Text in button',
    table: {
      defaultValue: { summary: 'button' },
      type: { summary: 'string' },
    },
    control: { type: 'text' },
  },
  plus: {
    name: 'plus',
    type: { name: 'boolean' },
    description: 'Symbol plus before text',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  width: {
    name: 'width',
    type: { name: 'number' },
    description: 'CSS property "width" in px',
    table: {
      defaultValue: { summary: 254 },
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
};
