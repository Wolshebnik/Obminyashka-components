import { IArgTypes } from 'types';
import { ISearchProps } from './types';

export const argTypes: IArgTypes<ISearchProps> = {
  id: {
    name: 'id',
    type: { name: 'string' },
    description: 'HTML attribute for input in this component',
    table: {
      type: { summary: 'string' },
    },
    controls: 'string',
  },

  name: {
    name: 'Name',
    type: { name: 'string', required: true },
    description:
      'HTML input attribute that is assigned to an input in a component',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'inputName' },
    },
    controls: 'string',
  },

  placeholder: {
    name: 'Placeholder',
    type: { name: 'string' },
    description: 'Value for  attribute placeholder of HTML input',
    table: {
      type: { summary: 'string' },
    },
    control: 'text',
  },

  autoComplete: {
    name: 'autoComplete',
    type: { name: 'string' },
    description: `HTML attribute of input.\n\n`,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'on' },
    },
    control: 'radio',
    options: ['on', 'off'],
  },

  value: {
    name: 'Value',
    type: { name: 'string' },
    description: `Input element content`,
    table: {
      type: { summary: 'string' },
    },
    controls: 'string',
  },

  onClick: {
    name: 'onClick',
    type: { name: 'function' },
    description: `The function to be passed to the search icon.`,
    table: {
      type: { summary: 'function' },
    },
  },
};
