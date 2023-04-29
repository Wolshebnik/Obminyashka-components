import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { argTypes } from './arg-types';
import { CategoryButton } from './index';
import { IBtnCatygoryProps } from './types';

const meta = {
  title: 'CategoryButton',
  component: CategoryButton,
  argTypes,
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof CategoryButton>;

const Template = (args: IBtnCatygoryProps) => {
  const [open, setOpen] = useState(false);

  return <CategoryButton {...args} open={open} setOpen={setOpen} />;
};

export const ButtonCategoryDefault: Story = {
  args: { top: 20, left: 20, text: 'categories' },
  render: (args) => <Template {...args} />,
};
