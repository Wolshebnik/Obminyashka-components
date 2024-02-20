import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './index';

const meta = {
  title: 'Select',
  component: Select,
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const DefaultSlider: Story = {};
