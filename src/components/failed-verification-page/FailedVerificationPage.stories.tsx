import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FailedVerificationPage } from '.';

const meta = {
  title: 'FailedVerificationPage',
  component: FailedVerificationPage,
} satisfies Meta<typeof FailedVerificationPage>;

export default meta;
type Story = StoryObj<typeof FailedVerificationPage>;

export const ConfirmationFailedDefault: Story = {
  render: () => (
    <div
      style={{
        margin: 'auto',
      }}
    >
      <FailedVerificationPage
        title="UPS!"
        onClick={() => {}}
        routeRegistration="SignUp"
        textBtnRegistration="Registration"
        textBtnSendNewMessage="Send a new message"
        text="The verification link was not found or has expired. Please repeat the registration procedure or order a new account verification link"
      />
    </div>
  ),
};
