import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '..';
import { Button } from '.';

import {argTypes} from './arg-types';

export default {
  title: 'Button',
  component: Button,
  argTypes,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BlueButton = Template.bind({});
BlueButton.args = {
  text: 'Button',
};

export const GreenButton = Template.bind({});
GreenButton.args = {
  text: 'Button',
  icon: <Icon.Plus />,
  colorType: 'green',
};

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  text: 'Button',
  icon: <Icon.Google />,
};

export const ButtonIconRight = Template.bind({});
ButtonIconRight.args = {
  text: 'Button',
  icon: <Icon.Google />,
  orderRight: true,
};
