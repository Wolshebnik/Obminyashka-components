import { IArgTypes } from 'types';

import { IMainSwiper } from './types';

export const argTypes: IArgTypes<IMainSwiper> = {
  data: {
    name: 'data',
    type: { name: 'string', required: true },
    description: 'Array of objects with data for the slider',
    table: {
      type: { summary: 'array of objects' },
    },
  },
};
