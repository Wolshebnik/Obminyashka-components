import type { Meta, StoryObj } from '@storybook/react';
import { Success } from '.';

const meta = {
  title: 'Success',
  component: Success,
} satisfies Meta<typeof Success>;

export default meta;
type Story = StoryObj<typeof Success>;

export const SuccessDefault: Story = {
  render: () => (
    <div
      style={{
        margin: 'auto',
      }}
    >
      <Success
        title="Ласкаво просимо на сайт"
        nameWebsite="Obminyashka"
        text="Верифікація пройшла успішно."
        textButton="Головна сторінка"
      />
    </div>
  ),
};
