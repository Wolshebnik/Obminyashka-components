import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './index';
import { categoryData } from './mock';
import { argTypes } from './arg-types';

const meta = {
  title: 'Select',
  component: Select,
  argTypes,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const options = categoryData[0]?.options || [];

export const SelectCategory: Story = {
  args: {
    title: 'clothes',
    options: options,
    onChange: () => {},
  },
  render: (args) => {
    return (
      <div style={{ width: '300px' }}>
        <Select {...args} />
      </div>
    );
  },
};
