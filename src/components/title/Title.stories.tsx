import type { Meta, StoryObj } from '@storybook/react';

import { Title } from '.';
import { argTypes } from './arg-types';

const meta = {
  title: 'Title',
  component: Title,
  argTypes,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const TitleDefault: Story = {
  args: {
    text: 'Чужих дітей не буває!',
  },
};

export const TitleWithStyles: Story = {
  args: {
    style: { fontSize: 20 },
    text: 'Чужих дітей не буває!',
  },
};

export const TitleWithoutDots: Story = {
  args: {
    hiddenDots: true,
    text: 'Чужих дітей не буває!',
  },
};
