export const argTypes = {
  isOpen: {
    name: 'isOpen',
    type: { name: 'boolean', required: true },
    description: 'Open modal',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
  },
  onClose: {
    name: 'onClose',
    type: { name: 'function', required: true },
    description: 'Close modal',
    table: {
      defaultValue: { summary: true },
      type: { summary: 'function' },
    },
  },
  withoutBg: {
    name: 'withoutBg',
    type: { name: 'boolean' },
    description: 'Without white background',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
  },
};
