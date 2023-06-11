import { IArgTypes } from 'types';

import { IFooterProps } from './types';

export const argTypes: IArgTypes<IFooterProps> = {
  toMain: {
    name: 'toMain',
    type: { name: 'string' },
    description: 'Link',
    table: {
      type: { summary: 'string' },
    },
  },
  text: {
    name: 'text',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  name: {
    name: 'name',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  rules: {
    name: 'rules',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  charity: {
    name: 'charity',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  protect: {
    name: 'protect',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  questions: {
    name: 'questions',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  toCharity: {
    name: 'toCharity',
    type: { name: 'string' },
    description: 'Link',
    table: {
      type: { summary: 'string' },
    },
  },
  toQuestions: {
    name: 'toQuestions',
    type: { name: 'string' },
    description: 'Link',
    table: {
      type: { summary: 'string' },
    },
  },
  toRules: {
    name: 'toRules',
    type: { name: 'string' },
    description: 'Link',
    table: {
      type: { summary: 'string' },
    },
  },
  inFooterOAuth: {
    name: `inFooterOAuth`,
    type: { name: 'boolean' },
    description:
      'Property from which the type of the Logo element changes. Boolean.',
    table: {
      type: { summary: 'boolean' },
    },
    controls: 'boolean',
  },
};
