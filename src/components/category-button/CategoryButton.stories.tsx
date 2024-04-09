import type { Meta, StoryObj } from '@storybook/react';

import { PresentationHeader } from 'components/shared';

import { CategoryButton } from '.';
import { categoryInfo } from './mock';
import { argTypes } from './arg-types';
import { IBtnCategoryProps } from './types';

const meta = {
  title: 'CategoryButton',
  component: CategoryButton,
  argTypes,
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof CategoryButton>;

const Template = (args: IBtnCategoryProps) => {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <PresentationHeader>
        <CategoryButton {...args} />
      </PresentationHeader>
    </div>
  );
};

export const ButtonCategoryDefault: Story = {
  args: {
    textBtn: 'categories',
    categoryInfo: categoryInfo,
  },
  render: (args) => <Template {...args} />,
};
