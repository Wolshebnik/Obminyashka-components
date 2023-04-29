import type { Meta, StoryObj } from '@storybook/react';

import { ErrorDisplay } from '.';
import { argTypes } from './arg-types';

const meta = {
  title: 'Error',
  component: ErrorDisplay,
  argTypes,
} satisfies Meta<typeof ErrorDisplay>;

export default meta;
type Story = StoryObj<typeof ErrorDisplay>;

export const ErrorDefault: Story = {
  args: { error: 'You did something wrong...' },
};
