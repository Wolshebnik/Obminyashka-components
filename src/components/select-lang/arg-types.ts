export const argTypes = {
  lang: {
    type: { name: 'lang' },
    description: 'used language',
    options: ['ua', 'en'],
    control: { type: 'radio' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'ua' },
    },
  },
  onClick: {
    name: 'onClick',
    type: { name: 'function' },
    description: 'Handler click for change language',
    table: {
      type: { summary: 'function' },
    },
    action: 'Click',
  },
};
