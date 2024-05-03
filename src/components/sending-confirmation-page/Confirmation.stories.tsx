import type { Meta, StoryObj } from '@storybook/react';

import { SendingConfirmationPage } from '.';

const meta = {
  title: 'SendingConfirmationPage',
  component: SendingConfirmationPage,
} satisfies Meta<typeof SendingConfirmationPage>;

export default meta;
type Story = StoryObj<typeof SendingConfirmationPage>;

export const ConfirmationDefault: Story = {
  render: () => (
    <div
      style={{
        margin: 'auto',
      }}
    >
      <SendingConfirmationPage
        title="sending a link"
        text="A confirmation message has been sent to your email"
      />
    </div>
  ),
};
