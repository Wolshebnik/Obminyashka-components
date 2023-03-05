export const argTypes = {
  languageArray: {
    type: { name: 'Array' },
    description: 'Array of languages',
    table: {
      type: { summary: 'Array' },
    },
  },
  onClick: {
    name: 'onClick',
    type: { name: 'function' },
    description: 'Handler click',
    table: {
      type: { summary: 'function' },
    },
    action: 'Click',
  },
};
