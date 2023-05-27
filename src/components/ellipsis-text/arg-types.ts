import { IArgTypes } from 'types';

import { ITooltipProps } from './types';

export const argTypes: IArgTypes<ITooltipProps> = {
  children: {
    name: 'children',
    type: { name: 'string' },
    description: 'Tooltip reference element',
  },
  position: {
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
  widthTooltip: {
    name: 'widthTooltip',
    type: { name: 'number' },
    description: 'Tooltip CSS width ',
    table: {
      defaultValue: { summary: 200 },
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
};
