export const argTypes = {
  value: {
    name: 'value',
    type: { name: 'string' },
    description: 'content of textArea',
    table: {
      control: { summary: 'string' },
    },
  },

  setDescription: {
    name: 'setDescription',
    type: { name: 'function' },
    description: 'setting a new value for description field',
  },

  translatedTitle: {
    name: 'translatedTitle',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      control: { summary: 'string' },
    },
  },

  translatedDescription: {
    name: 'translatedDescription',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      control: { summary: 'string' },
    },
  },
};
