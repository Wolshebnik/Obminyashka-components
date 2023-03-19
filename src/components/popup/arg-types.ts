export const argTypes = {
  children: {
    name: 'children',
    type: { name: 'ReactNode', required: true },
    description: 'Sends child elements directly to output',
    table: {
      type: { summary: 'ReactNode' },
    },
  },
  width: {
    name: 'width',
    type: { name: 'string', required: true },
    description: 'Modal width',
    table: {
      type: { summary: 'string' },
    },
  },
};
