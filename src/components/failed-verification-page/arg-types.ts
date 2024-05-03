import { IArgTypes } from 'types';

import { IFailedVerificationProps } from './types';

export const argTypes: IArgTypes<IFailedVerificationProps> = {
  title: {
    name: 'title',
    type: { name: 'string' },
    description: 'hiddenStar',
    table: {
      type: { summary: 'string' },
    },
  },

  text: {
    name: 'text',
    type: { name: 'string' },
    description: 'hiddenStar',
    table: {
      type: { summary: 'string' },
    },
  },

  textBtnSendNewMessage: {
    name: 'textBtnSendNewMessage',
    type: { name: 'string' },
    description: 'hiddenStar',
    table: {
      type: { summary: 'string' },
    },
  },

  textBtnRegistration: {
    name: 'textBtnRegistration',
    type: { name: 'string' },
    description: 'hiddenStar',
    table: {
      type: { summary: 'string' },
    },
  },
};
