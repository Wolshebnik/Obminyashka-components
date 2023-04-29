import { IArgTypes } from 'types';

import { ITooltipProps } from './types';

export const argTypes: IArgTypes<ITooltipProps> = {
  children: {
    name: 'children',
    type: { name: 'string' },
    description: 'Tooltip reference element',
  },
  id: {
    name: 'Id',
    type: { name: 'string' },
    description: 'This prop is used to help implement the accessibility logic.',
    table: {
      type: { summary: 'string' },
    },
  },
  place: {
    name: 'place',
    type: { name: 'string' },
    description: 'Tooltip placement.',
    table: {
      defaultValue: { summary: 'bottom' },
      type: { summary: 'string' },
    },
    control: { type: 'select' },
    options: ['top', 'bottom', 'left', 'right'],
  },
  offset: {
    name: 'Offset',
    type: { name: 'number' },
    description: `Space between the tooltip element and anchor element`,
    table: {
      defaultValue: { summary: 10 },
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
  width: {
    name: 'width',
    type: { name: 'number' },
    description: 'Tooltip CSS width ',
    table: {
      defaultValue: { summary: 200 },
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
  delayShow: {
    name: 'delayShow',
    type: { name: 'number' },
    description: `CSS The number of milliseconds to wait before showing the tooltip. This prop won't impact the enter touch delay`,
    table: {
      defaultValue: { summary: 500 },
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
  delayHide: {
    name: 'delayHide',
    type: { name: 'number' },
    description: `The number of milliseconds to wait before hiding the tooltip. This prop won't impact the leave touch delay`,
    table: {
      defaultValue: { summary: 500 },
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
};
