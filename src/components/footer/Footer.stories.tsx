import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from '.';

import { argTypes } from './arg-types';

const meta = {
  title: 'Footer',
  component: Footer,
  argTypes,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterDefault: Story = {
  args: {
    text: 'Good Deals',
    name: 'Obminyashka',
    rules: 'Safe deal rules',
    protect: 'All rights reserved',
    charity: 'Charity organizations',
    questions: 'Frequently asked questions',
  },
};
