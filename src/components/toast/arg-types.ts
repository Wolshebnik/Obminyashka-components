export const argTypes = {
  rtl: {
    name: 'rtl',
    type: { name: 'boolean' },
    description: 'swap text',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
    control: { type: 'boolean' },
  },
  theme: {
    name: 'theme',
    type: { name: 'string' },
    description: 'color theme',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'light' },
    },
    control: { type: 'select' },
    options: ['light', 'dark'],
  },
  autoClose: {
    name: 'autoClose',
    type: { name: 'number' },
    description: 'deley',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 5000 },
    },
  },
  draggable: {
    name: 'draggable',
    type: { name: 'boolean' },
    description: 'draggable',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
    control: { type: 'boolean' },
  },
  newestOnTop: {
    name: 'newestOnTop',
    type: { name: 'boolean' },
    description: 'dubble Message on top',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
    control: { type: 'boolean' },
  },
  closeOnClick: {
    name: 'closeOnClick',
    type: { name: 'boolean' },
    description: 'closeOnClick',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
    control: { type: 'boolean' },
  },
  pauseOnHover: {
    name: 'pauseOnHover',
    type: { name: 'boolean' },
    description: 'pauseOnHover',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
    control: { type: 'boolean' },
  },
  position: {
    name: 'position',
    type: { name: 'boolean' },
    description: 'message position',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
    control: { type: 'boolean' },
  },
  hideProgressBar: {
    name: 'hideProgressBar',
    type: { name: 'boolean' },
    description: 'hideProgressBar',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
    control: { type: 'boolean' },
  },
  pauseOnFocusLoss: {
    name: 'pauseOnFocusLoss',
    type: { name: 'boolean' },
    description: 'pauseOnFocusLoss',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
    },
    control: { type: 'boolean' },
  },
};
