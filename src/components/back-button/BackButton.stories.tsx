import { ComponentStory, ComponentMeta } from '@storybook/react';

import * as Icon from '../icon';

import { BackButton } from '.';
import { argTypes } from './argTypes';

export default {
  title: 'BackButton',
  component: BackButton,
  argTypes,
} as ComponentMeta<typeof BackButton>;

const Template: ComponentStory<typeof BackButton> = (args) => (
  <BackButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Button',
  icon: <Icon.ChevronLeft />,
};

export const WithAnotherIcon = Template.bind({});
WithAnotherIcon.args = {
  text: 'Button',
  icon: <Icon.Loader />,
};
