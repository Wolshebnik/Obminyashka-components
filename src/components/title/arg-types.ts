export const argTypes = {
  text: {
    name: 'text',
    type: { name: 'string' },
    description: 'Text',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Title' },
    },
  },
  hiddenDots: {
    name: 'hiddenDots',
    type: { name: 'boolean' },
    description: 'hiddenDots',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
    },
  },
};
