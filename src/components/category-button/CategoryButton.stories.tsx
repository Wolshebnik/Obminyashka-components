import type { Meta, StoryObj } from '@storybook/react';

import { PresentationHeader } from 'components/shared';

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

const Template = (args: any) => {
  return (
    <PresentationHeader>
      <CategoryButton {...args}></CategoryButton>
    </PresentationHeader>
  );
};

export const ButtonCategoryDefault: Story = {
  args: {
    categoryInfo: data,
    textBtn: 'categories',
  },
  render: (args) => <Template {...args} />,
};
