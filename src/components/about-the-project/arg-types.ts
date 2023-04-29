import { IArgTypes } from 'types';

import { IAboutTheProject } from './types';

export const argTypes: IArgTypes<IAboutTheProject> = {
  text: {
    name: 'text',
    type: { name: 'string' },
    description: 'Reference name',
    table: {
      type: { summary: 'string' },
    },
  },
};
