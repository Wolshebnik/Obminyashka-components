export const argTypes = {
  lang: {
    name: 'language',
    type: { name: 'language', required: true },
    description: 'Сhoose the language of the site',
    control: { type: 'select' },
    options: ['ua', 'en'],
  },
  title: {
    name: 'title',
    type: { name: 'title', required: true },
    description: 'title',
    table: {
      type: { summary: 'string' },
    },
  },
  buttonText: {
    name: 'buttonText',
    type: { name: 'string', required: true },
    description: 'button text',
    table: {
      type: { summary: 'string' },
    },
  },
  readyForOffers: {
    name: 'readyForOffers',
    type: { name: 'boolean' },
    description: 'Ready for offers',
    table: {
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  translatedTextAge: {
    name: 'translatedTextAge',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  translatedTextSize: {
    name: 'translatedTextSize',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  translatedTextSeason: {
    name: 'translatedTextSeason',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  translatedTextGender: {
    name: 'translatedTextGender',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  translatedTextDescription: {
    name: 'translatedTextDescription',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  translatedTextChangesTo: {
    name: 'translatedTextChangesTo',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  translatedTextCheckInUl: {
    name: 'translatedTextCheckInUl',
    type: { name: 'string' },
    description: 'This props depends on the choice of language on the site',
    table: {
      type: { summary: 'string' },
    },
  },
  age: {
    name: 'age',
    type: { name: 'string', required: true },
    description: 'Data from the users',
    table: {
      type: { summary: 'string' },
    },
  },
  gender: {
    name: 'gender',
    type: { name: 'string', required: true },
    description: 'Data from the users',
    table: {
      type: { summary: 'string' },
    },
  },
  size: {
    name: 'size',
    type: { name: 'string' },
    description: 'Data from the users',
    table: {
      type: { summary: 'string' },
    },
  },
  season: {
    name: 'season',
    type: { name: 'string', required: true },
    description: 'Data from the users',
    table: {
      type: { summary: 'string' },
    },
  },
  wishes: {
    name: 'wishes',
    type: { name: 'array' },
    description: 'Data from the users',
    table: {
      type: { summary: 'array' },
    },
  },
};
