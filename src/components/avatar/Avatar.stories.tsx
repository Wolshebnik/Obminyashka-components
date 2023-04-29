import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';
import { image } from './mock';
import { argTypes } from './arg-types';

const meta = {
  title: 'Avatar',
  component: Avatar,
  argTypes,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarDefault: Story = {};

export const AvatarWithImage: Story = {
  args: { source: image },
};

export const AvatarMiddle: Story = {
  args: { width: 50, height: 50, source: image },
};

export const AvatarBig: Story = {
  args: {
    width: 100,
    height: 100,
    source: image,
  },
};
