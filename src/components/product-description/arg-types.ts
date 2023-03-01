export const argTypes = {
  title: {
    name: 'title',
    type: { name: 'string', required: true },
    description: 'title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Title' },
    },
  },
  description: {
    name: 'description',
    type: { name: 'string', required: true },
    description: 'description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'description' },
    },
  },
};
