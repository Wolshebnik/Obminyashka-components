import { IArgTypes } from 'types';

import { ISearchResult } from './types';

export const argTypes: IArgTypes<ISearchResult> = {
  title: {
    name: 'title',
    type: { name: 'string' },
    description: 'title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Title' },
    },
  },
  text: {
    name: 'text',
    type: { name: 'string' },
    description: 'Text',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Title' },
    },
  },
};
