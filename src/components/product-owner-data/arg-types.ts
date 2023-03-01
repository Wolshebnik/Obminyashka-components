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
  dateTranslatedText: {
    name: 'dateTranslatedText',
    type: { name: 'string' },
    description: 'translated text on En or Ua',
    table: {
      defaultValue: { summary: 'Дата публікації'},
      type: { summary: 'string' },
    },
    control: { type: 'select' },
    options: ['Дата публікації', 'Publication date:'],
  },
  cityTranslatedText: {
    name: 'cityTranslatedText',
    type: { name: 'string' },
    description: 'translated text on En or Ua',
    table: {
      defaultValue: { summary: 'Місто:'},
      type: { summary: 'string' },
    },
    control: { type: 'select' },
    options: ['Місто:', 'City:'],
  },
  phoneTranslatedText: {
    name: 'phoneTranslatedText',
    type: { name: 'string' },
    description: 'translated text on En or Ua',
    table: {
      defaultValue: { summary: 'Телефон:'},
      type: { summary: 'string' },
    },
    control: { type: 'select' },
    options: ['Телефон:', 'Phone:'],
  },
};
