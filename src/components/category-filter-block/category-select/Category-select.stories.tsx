import type { Meta, StoryObj } from '@storybook/react';

import { categoryData } from './mock';
import { CategorySelect } from './index';

const meta = {
  title: 'CategorySelect',
  component: CategorySelect,
  decorators: [
    (Story) => (
      <div style={{ width: '250px' }}>
        <Story />
        {/* <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story /> */}
      </div>
    ),
  ],
} satisfies Meta<typeof CategorySelect>;

export default meta;
type Story = StoryObj<typeof CategorySelect>;

export const DefaultSlider: Story = {
  args: categoryData,
};
