import type { Meta, StoryObj } from '@storybook/react';

import { data } from './mock';
import { argTypes } from './arg-types';
import { CategoryButton } from './index';

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
