import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Google } from '../../assets/icons/google.svg';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      name: 'Type',
      type: { name: 'string', required: true },
      description: 'Button type',
      table: { defaultValue: { summary: 'button' } },
      options: ['submit', 'reset', 'button'],
      control: { type: 'select' },
    },
    bold: {
      name: 'Bold',
      type: { name: 'boolean' },
      description: 'CSS font-weight bold',
      table: { defaultValue: false },
      control: { type: 'boolean' },
    },
    text: {
      name: 'Text',
      type: { name: 'string' },
      description: 'Button label',
      table: { defaultValue: 'button' },
      control: { type: 'text' },
    },
    width: {
      name: 'Width',
      type: { name: 'string' },
      description: 'CSS width',
      control: { type: 'text' },
    },
    /*     style: {
      name: 'Style',
      type: { name: 'string' },
      description: 'CSS in-line styles',
      control: { type: 'text' },
    }, */
    lHeight: {
      name: 'Line-height',
      type: { name: 'string' },
      description: 'CSS line-height',
      control: { type: 'text' },
    },
    disabled: {
      name: 'Disabled',
      type: { name: 'boolean' },
      description: 'HTML property "disabled"',
      table: { defaultValue: false },
      control: { type: 'boolean' },
    },
    colorType: {
      name: 'Color-type',
      type: { name: 'string' },
      description: 'Color type',
      table: { defaultValue: 'blue' },
      control: { type: 'select' },
      options: ['blue', 'green'],
    },
    orderRight: {
      name: 'Order right',
      type: { name: 'boolean' },
      description: 'Set icon right',
      table: { defaultValue: false },
      control: { type: 'boolean' },
    },
    /*     icon: {
      name: 'Icon',
      type: {name: "string"},
      description: "icon",
      control: {type: "select"},
      options: [Plus, "green"],
    }, */
    onClick: {
      name: 'onClick',
      type: { name: 'function' },
      description: 'Handler click',
      action: 'Click',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BlueButton = Template.bind({});
BlueButton.args = {
  text: 'Button',
};

export const GreenButton = Template.bind({});
GreenButton.args = {
  text: 'Button',
  icon: <Plus />,
  colorType: 'green',
};

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  text: 'Button',
  icon: <Google />,
};

export const ButtonIconRight = Template.bind({});
ButtonIconRight.args = {
  text: 'Button',
  icon: <Google />,
  orderRight: true,
};
