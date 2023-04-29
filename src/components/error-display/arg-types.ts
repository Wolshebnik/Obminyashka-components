import { IArgTypes } from 'types';

import { IError } from './types';

export const argTypes: IArgTypes<IError> = {
  error: {
    name: 'error',
    type: { name: 'string' },
    description: 'Text error',
    table: {
      type: { summary: 'string' },
    },
  },
};
