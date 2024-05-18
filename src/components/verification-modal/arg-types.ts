import { IArgTypes } from 'types';

import { IVerificationModal } from './types';

export const argTypes: IArgTypes<IVerificationModal> = {
  title: {
    name: 'title',
    type: { name: 'string' },
    description: 'hiddenStar',
    table: {
      type: { summary: 'string' },
    },
  },
};
