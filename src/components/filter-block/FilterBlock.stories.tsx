//TODO Typescript types
import type { Meta, StoryObj } from '@storybook/react';

import { FilterBlock } from '.';
import { CategoryData, FilterData } from './mock';

const meta = {
  title: 'FilterBlock',
  component: FilterBlock,
} satisfies Meta<typeof FilterBlock>;

export default meta;
type Story = StoryObj<typeof FilterBlock>;

const Template = (args: any) => {
  return <FilterBlock {...args} />;
};

export const BlockCategory: Story = {
  args: {
    data: { ...CategoryData },
  },
  render: (args) => <Template {...args} />,
};

export const BlockFilter: Story = {
  args: {
    data: { ...FilterData },
  },
  render: (args) => <Template {...args} />,
};
