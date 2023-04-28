import type { Meta, StoryObj } from '@storybook/react';

import { CancelEverything } from '.';
import { argTypes } from './arg-types';

const meta = {
  title: 'CancelEverything',
  component: CancelEverything,
  decorators: [
    (Story) => (
      <div style={{ width: '200px', marginLeft: '20px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes,
} satisfies Meta<typeof CancelEverything>;

export default meta;
type Story = StoryObj<typeof CancelEverything>;

export const CancelEverythingItem: Story = {
  args: {
    text: 'Cancel Everything',
  },
};
