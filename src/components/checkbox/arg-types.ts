export const argTypes = {
  onChange: {
    name: 'onChange',
    type: { name: 'function' },
    description: 'Handler change',
    action: 'change',
  },

  margin: {
    name: 'margin',
    type: { name: 'number', required: true },
    description: 'CSS margin',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 12 },
    },
    control: { type: 'number' },
  },

  gap: {
    name: 'gap',
    type: { name: 'number', required: false },
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
    type: { name: 'string', required: true },
    description: 'text value of label',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Checkbox' },
    },
    control: { type: 'string' },
  },

  type: {
    name: 'type',
    type: { name: 'string', required: true },
    description: 'type of input',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'checkbox' },
    },
    control: 'select',
    options: ['checkbox', 'radio'],
  },
};
