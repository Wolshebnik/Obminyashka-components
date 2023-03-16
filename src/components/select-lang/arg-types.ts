export const argTypes = {
  lang: {
    type: { name: 'lang', required: true },
    description: 'used language',
    options: ['ua', 'en'],
    control: { type: 'radio' },
    table: {
      type: { summary: 'string' },
    },
  },
  onClick: {
    name: 'onClick',
    type: { name: 'function', required: true },
    description: 'Handler click for change language',
    table: {
      type: { summary: 'function' },
    },
    action: 'Click',
  },
};
