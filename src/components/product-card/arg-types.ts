import { IArgTypes } from 'types';

import { IProductCardProps } from './types';

export const argTypes: IArgTypes<IProductCardProps> = {
  city: {
    name: 'city',
    type: { name: 'string', required: true },
    description: 'city name',
    table: {
      type: { summary: 'string' },
    },
  },
  text: {
    name: 'text',
    type: { name: 'string', required: true },
    description: 'text',
    table: {
      type: { summary: 'string' },
    },
  },
  picture: {
    name: 'picture',
    type: { name: 'string', required: true },
    description: 'src',
    table: {
      type: { summary: 'string' },
    },
  },
  buttonText: {
    name: 'buttonText',
    type: { name: 'string', required: true },
    description: 'button text',
    table: {
      type: { summary: 'string' },
    },
  },
  isFavorite: {
    name: 'isFavorite',
    type: { name: 'boolean' },
    description: 'isFavorite',
    table: {
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  onClick: {
    name: 'onClick',
    type: { name: 'function' },
    description: 'Handler click',
    action: 'Click',
    table: {
      type: { summary: 'function' },
    },
  },
  avatar: {
    name: 'avatar',
    type: { name: 'string' },
    description: 'avatar image',
    table: {
      type: { summary: 'string' },
    },
  },
  margin: {
    name: 'margin',
    type: { name: 'string' },
    description: 'CSS margin',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 0 },
    },
  },
  inboxMessage: {
    name: 'message',
    type: { name: 'number' },
    description: 'inboxMessage',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 0 },
    },
  },
};
