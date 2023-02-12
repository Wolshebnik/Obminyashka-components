export const argTypes = {
  onChange: {
    name: 'onChange',
    type: { name: 'function' },
    description: 'Handler change',
    action: 'change',
  },

  gap: {
    name: 'gap',
    type: { name: 'number' },
    description: 'gap',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 14 },
    },
    control: { type: 'number' },
  },

  fontSize: {
    name: 'font-size',
    type: { name: 'number', required: true },
    description: 'CSS font-size',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 14 },
    },
    control: { type: 'number' },
  },

  text: {
    name: 'text',
    type: { name: 'string' },
    description: 'text value of label',
    table: {
      defaultValue: { summary: 'Checkbox' },
      type: { summary: 'string' },
    },
  },

  type: {
    name: 'type',
    type: { name: 'string' },
    description: 'type of input',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'checkbox' },
    },
    control: 'select',
    options: ['checkbox', 'radio'],
  },
};
