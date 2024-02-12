import { Meta, StoryObj } from '@storybook/react';

import { NoFoundResult } from '.';
import { argTypes } from './arg-types';

const meta = {
  title: 'NoFoundResult',
  component: NoFoundResult,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#FAFAFA',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes,
} satisfies Meta<typeof NoFoundResult>;

export default meta;
type Story = StoryObj<typeof NoFoundResult>;

export const NoFoundDefault: Story = {
  args: {
    title: 'Oh! Nothing found.',
    text: 'Try changing your search parameters.',
  },
};
