export const argTypes = {
  children: {
    name: 'children',
    type: { name: 'custom' },
    description: 'Tooltip reference element',
  },
  id: {
    name: 'Id',
    type: { name: 'string' },
    description: 'This prop is used to help implement the accessibility logic.',
    table: {
      type: { summary: 'string' },
    },
  },
  place: {
    name: 'place',
    type: { name: 'string' },
    description: 'Tooltip placement.',
    table: {
      defaultValue: { summary: 'bottom' },
      type: { summary: 'string' },
    },
    control: { type: 'select' },
    options: ['top', 'bottom', 'left', 'right'],
  },
  delayShow: {
    name: 'delayShow',
    type: { name: 'number' },
    description: `CSS The number of milliseconds to wait before showing the tooltip. This prop won't impact the enter touch delay`,
    table: {
      defaultValue: { summary: 500 },
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
  delayHide: {
    name: 'delayHide',
    type: { name: 'number' },
    description: `The number of milliseconds to wait before hiding the tooltip. This prop won't impact the leave touch delay`,
    table: {
      defaultValue: { summary: 500 },
      type: { summary: 'number' },
    },
    control: { type: 'number' },
  },
};
