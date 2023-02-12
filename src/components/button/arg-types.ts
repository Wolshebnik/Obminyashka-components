export const argTypes = {
  type: {
    name: 'type',
    type: { name: 'string', required: true },
    description: 'Button type',
    table: {
      defaultValue: { summary: 'button' },
      type: { summary: 'string' },
    },
    options: ['submit', 'reset', 'button'],
    control: { type: 'select' },
  },
  bold: {
    name: 'bold',
    type: { name: 'boolean' },
    description: 'CSS font-weight bold',
    table: {
      defaultValue: false,
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  text: {
    name: 'text',
    type: { name: 'string' },
    description: 'Button label',
    table: {
      defaultValue: { summary: 'Button' },
      type: { summary: 'string' },
    },
    control: { type: 'text' },
  },
  width: {
    name: 'width',
    type: { name: 'number' },
    description: 'CSS width',
    table: {
      defaultValue: { summary: 140 },
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
  lHeight: {
    name: 'lHeight',
    type: { name: 'number' },
    description: 'CSS line-height',
    table: {
      defaultValue: { summary: 20 },
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean' },
    description: 'HTML property "disabled"',
    table: {
      defaultValue: false,
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  colorType: {
    name: 'colorType',
    type: { name: 'string' },
    description: 'Color type',
    table: {
      defaultValue: 'blue',
      type: { summary: 'string' },
    },
    control: { type: 'select' },
    options: ['blue', 'green'],
  },
  orderRight: {
    name: 'orderRight',
    type: { name: 'boolean' },
    description: 'Set icon right',
    table: {
      defaultValue: false,
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
/*   icon: {
    name: 'icon',
    type: { name: 'string' },
    description: 'icon',
    control: { type: 'select' },
    options: ['some', 'green'],
  }, */
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
