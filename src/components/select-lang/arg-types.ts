import { IArgTypes } from 'types';

import { ILanguageSelection } from './types';

export const argTypes: IArgTypes<ILanguageSelection> = {
  lang: {
    type: { name: 'string', required: true },
    description: 'used language',
    options: ['ua', 'en'],
    control: { type: 'radio' },
    table: {
      type: { summary: 'string' },
    },
  },
  onClick: {
    name: 'onClick',
    type: { name: 'function', required: true },
    description: 'Handler click for change language',
    table: {
      type: { summary: 'function' },
    },
    action: 'Click',
  },
};
