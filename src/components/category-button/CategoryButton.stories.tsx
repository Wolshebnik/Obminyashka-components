import type { Meta, StoryObj } from '@storybook/react';

import { data } from './mock';
import { CategoryButton } from '.';
import { argTypes } from './arg-types';

const meta = {
  title: 'CategoryButton',
  component: CategoryButton,
  argTypes,
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof CategoryButton>;

export const ButtonCategoryDefault: Story = {
  args: {
    categoryInfo: data,
    textBtn: 'categories',
  },
};
