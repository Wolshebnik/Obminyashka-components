import { IArgTypes } from 'types';

import { IPagination } from './types';

export const argTypes: IArgTypes<IPagination> = {
  children: {
    name: 'children',
    type: { name: 'string', required: true },
    description: 'Sends child elements directly to output',
    table: {
      type: { summary: 'ReactNode' },
    },
  },
  showLessItems: {
    name: 'showLessItems',
    type: { name: 'boolean' },
    description: 'Show less page items',
    table: {
      defaultValue: { summary: true },
      type: { summary: 'boolean' },
    },
  },
  total: {
    name: 'total',
    type: { name: 'number', required: true },
    description: 'Items total count',
    table: {
      type: { summary: 'number' },
    },
  },
  showTitle: {
    name: 'showTitle',
    type: { name: 'boolean' },
    description: 'Show total records and range',
    table: {
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  current: {
    name: 'current',
    type: { name: 'number', required: true },
    description: 'Current page	',
    table: {
      type: { summary: 'number' },
    },
  },
  onChange: {
    name: 'onChange',
    type: { name: 'function', required: true },
    description: 'Page change callback',
    action: 'Change',
    table: {
      type: { summary: 'function' },
    },
  },
  pageSize: {
    name: 'pageSize',
    type: { name: 'number', required: true },
    description: 'Items per page',
    table: {
      type: { summary: 'number' },
    },
  },
  nextIcon: {
    name: 'nextIcon',
    description: 'Forward page switch icon',
    table: {
      type: { summary: '<Icon.Next />' },
    },
  },
  prevIcon: {
    name: 'prevIcon',
    description: 'Back page switch icon',
    table: {
      type: { summary: '<Icon.Prev />' },
    },
  },
};
