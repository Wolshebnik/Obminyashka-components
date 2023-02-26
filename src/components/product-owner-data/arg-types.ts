export const argTypes = {
  avatar: {
    name: 'avatar',
    type: { name: 'string' },
    description: 'avatar',
    table: {
      type: { summary: 'string' },
    },
  },
  name: {
    name: 'name',
    type: { name: 'string', required: true },
    description: 'name',
    table: {
      type: { summary: 'string' },
    },
  },
  date: {
    name: 'date',
    type: { name: 'string' },
    description: 'date',
    table: {
      type: { summary: 'string' },
    },
  },
  city: {
    name: 'city',
    type: { name: 'string', required: true },
    description: 'city name',
    table: {
      type: { summary: 'string' },
    },
  },
  phone: {
    name: 'phone',
    type: { name: 'string' },
    description: 'phone',
    table: {
      type: { summary: 'string' },
    },
  },
  translatedText: {
    name: 'translatedText',
    type: { name: 'string', required: true },
    description: 'translatedText',
    table: {
      type: { summary: 'string' },
    },
  },
};
