export const argTypes = {
  textTitle: {
    name: 'text',
    type: { name: 'string' },
    description: 'Text',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Title' },
    },
  },
  hiddenStar: {
    name: 'hiddenStar',
    type: { name: 'boolean' },
    description: 'hiddenStar',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
    },
  },
};
