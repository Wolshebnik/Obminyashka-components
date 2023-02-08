import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '.';
import { image } from './mock';
import { argTypes } from './argTypes';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {};

export const AvatarWithImage = Template.bind({});
AvatarWithImage.args = {
  source: image,
};

export const AvatarMiddle = Template.bind({});
AvatarMiddle.args = {
  width: 50,
  height: 50,
  source: image,
};

export const AvatarBig = Template.bind({});
AvatarBig.args = {
  width: 100,
  height: 100,
  source: image,
};
