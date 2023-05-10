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
  height: {
    name: 'height',
    type: { name: 'number' },
    description: 'CSS property "height" in px',
    table: {
      defaultValue: { summary: 50 },
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
  animated: {
    name: 'animated',
    type: { name: 'boolean' },
    description: 'Animated button',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  colorType: {
    name: 'colorType',
    type: { name: 'string' },
    description: 'Color type',
    table: {
      defaultValue: { summary: 'blue' },
      type: { summary: 'string' },
    },
    control: { type: 'select' },
    options: ['blue', 'green'],
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean' },
    description: 'Disabled',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  hover: {
    name: 'hover',
    type: { name: 'boolean' },
    description: 'Using CSS hover',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
};
