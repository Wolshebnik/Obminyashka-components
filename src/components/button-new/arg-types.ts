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
    description: 'Property "disabled" of button',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  square: {
    name: 'square',
    type: { name: 'boolean' },
    description: 'make button square',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  styleType: {
    name: 'styleType',
    type: { name: 'string' },
    description: 'Enable outline',
    table: {
      defaultValue: { summary: 'default' },
      type: { summary: 'string' },
    },
    control: { type: 'select' },
    options: ['default', 'outline'],
  },
  onClick: {
    name: 'onClick',
    type: { name: 'function' },
    description: 'Handler click',
    table: {
      type: { summary: 'function' },
    },
    action: 'Click',
  },
};
