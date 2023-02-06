import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Google } from '../../assets/icons/google.svg';

import { Button } from '.';
import { ColorType } from './types';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'Click' },
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
  colorType: 'green'
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
