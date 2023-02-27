import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';
import * as Icon from '../icon';
import { argTypes } from './arg-types';

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
  colorType: 'green',
  icon: <Icon.Plus />,
};

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  text: 'Button',
  icon: <Icon.Google />,
};

export const ButtonIconRight = Template.bind({});
ButtonIconRight.args = {
  text: 'Button',
  orderRight: true,
  icon: <Icon.Google />,
};

export const ButtonAnimation = Template.bind({});
ButtonAnimation.args = {
  text: 'button',
  isLoading: true,
  animationType: 'secondary',
};

export const AddRemove = Template.bind({});
AddRemove.args = {
  gap: 34,
  width: 34,
  height: 34,
  outsideText: true,
  colorType: 'green',
  icon: <Icon.Plus />,
  text: 'Додати поле',
};
export const AddRemoveEmpty = Template.bind({});
AddRemoveEmpty.args = {
  gap: 34,
  width: 34,
  height: 34,
  colorType: 'grey',
  outsideText: true,
  icon: <Icon.Plus />,
};
