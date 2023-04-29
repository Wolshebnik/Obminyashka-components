import type { Meta, StoryObj } from '@storybook/react';

import { AboutTheProject } from '.';
import { argTypes } from './arg-types';

const meta = {
  title: 'AboutTheProject',
  component: AboutTheProject,
  argTypes,
} satisfies Meta<typeof AboutTheProject>;

export default meta;
type Story = StoryObj<typeof AboutTheProject>;

export const DefaultLink: Story = {
  args: {
    text: 'About the project',
  },
};
