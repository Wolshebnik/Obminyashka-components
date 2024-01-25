import type { Meta, StoryObj } from '@storybook/react';

import { Deals } from '.';
import { argTypes } from './arg-types';

const meta = {
  title: 'Deals',
  component: Deals,
  argTypes,
} satisfies Meta<typeof Deals>;

export default meta;
type Story = StoryObj<typeof Deals>;

export const AboutTheProjectLink: Story = {
  args: {
    puzzleIcon: true,
    text: 'About the project',
  },
};

export const GoodDealLink: Story = {
  args: {
    heartIcon: true,
    text: 'Good deal',
  },
};

export const GoodDealLinkWithBg: Story = {
  args: {
    heartIcon: true,
    background: true,
    text: 'Good deal',
  },
};

export const AddAdvMobile: Story = {
  args: {
    text: 'Add advertisement',
  },
};
