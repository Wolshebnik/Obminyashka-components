import type { Meta, StoryObj } from '@storybook/react';

import { Confirmation } from '.';

const meta = {
  title: 'Confirmation',
  component: Confirmation,
} satisfies Meta<typeof Confirmation>;

export default meta;
type Story = StoryObj<typeof Confirmation>;

export const ConfirmationDefault: Story = {
  render: () => (
    <div
      style={{
        margin: 'auto',
      }}
    >
      <Confirmation
        title="sending a link"
        text="A confirmation message has been sent to your email"
      />
    </div>
  ),
};
