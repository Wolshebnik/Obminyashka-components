import type { Meta, StoryObj } from '@storybook/react';

import { Subtitle } from '.';
import { argTypes } from './arg-types';

const meta = {
  title: 'Subtitle',
  component: Subtitle,
  argTypes,
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof Subtitle>;

export const SubtitleDefault: Story = {
  args: {
    textTitle: 'Виберiть роздiл',
  },
};

export const WithoutStar: Story = {
  args: {
    hiddenStar: true,
    textTitle: 'Опис товара',
  },
};
