import { IArgTypes } from 'types';

import { IPopUpProps } from './types';

export const argTypes: IArgTypes<IPopUpProps> = {
  title: {
    name: 'title',
    type: { name: 'string' },
    description: 'hiddenStar',
    table: {
      type: { summary: 'string' },
    },
  },
};
