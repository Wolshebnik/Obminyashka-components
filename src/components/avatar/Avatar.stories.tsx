import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './index';
import { image } from './mock';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    width: {
      name: 'width',
      type: { name: 'number' },
      description: 'CSS width',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 28 },
      },
      control: { type: 'number' },
    },
    height: {
      name: 'height',
      type: { name: 'number' },
      description: 'CSS height',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 28 },
      },
      control: { type: 'number' },
    },
    source: {
      name: 'source',
      type: { name: 'string' },
      description: 'Image',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
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
