import { IArgTypes } from 'types';

import { IBackButton } from './types';

export const argTypes: IArgTypes<IBackButton> = {
  onClick: {
    name: 'onClick',
    type: { name: 'function' },
    description: 'Handler click',
    action: 'Click',
  },
  text: {
    name: 'text',
    type: { name: 'string' },
    description: 'Button name',
    table: {
      type: { summary: 'string' },
    },
  },
  icon: {
    name: 'Icon',
    description: 'Icon',
  },
};
