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
  isLoading: {
    type: { name: 'boolean' },
    description: 'Loader',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  outsideText: {
    type: { name: 'boolean' },
    description: 'Style button where text outside.',
    table: {
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  animationType: {
    type: { name: 'string' },
    description: 'Animation type',
    table: {
      defaultValue: { summary: 'default' },
      type: { summary: 'string' },
    },
    control: { type: 'select' },
    options: ['default', 'secondary'],
  },
  bold: {
    name: 'bold',
    type: { name: 'boolean' },
    description: 'CSS font-weight bold',
    table: {
      defaultValue: { summary: false },
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
  height: {
    name: 'height',
    type: { name: 'number' },
    description: 'CSS height',
    table: {
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
  gap: {
    name: 'gap',
    type: { name: 'number' },
    description: 'CSS gap',
    table: {
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
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  colorType: {
    name: 'colorType',
    type: { name: 'string' },
    description: 'Color type',
    table: {
      defaultValue: { summary: 'blue' },
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
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
  },
  //TODO
  /*   icon: {
    name: 'icon',
    description: 'React FC icon',
    table: {
        type: { summary: 'icon' },
      },
    options: Object.keys(icons),
    mapping: icons,
    control: {
        type: 'select', 
      },
  }, */
  nativeIcon: {
    type: { name: 'boolean' },
    description: "Don't change color icon on hover",
    table: {
      defaultValue: { summary: true },
      type: { summary: 'boolean' },
    },
    control: { type: 'boolean' },
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
