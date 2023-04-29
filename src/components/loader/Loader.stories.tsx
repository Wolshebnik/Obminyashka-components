import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '.';
import { Background } from './styles';

const meta = {
  title: 'Loader',
  component: Loader,
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

export const DefaultLoader: Story = {};

export const Secondary: Story = {
  args: {
    animationType: 'secondary',
  },
};
