export const argTypes = {
  text: {
    name: 'text',
    type: { name: 'text', required: true },
    description: 'Button name',
    table: {
      type: { summary: 'string' },
    },
  },
  onClick: {
    name: 'onClick',
    type: { name: 'function' },
    description: 'Reset all option',
    table: {
      type: { summary: 'function' },
    },
    action: 'onClick',
  },
};
