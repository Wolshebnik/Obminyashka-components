import type { Meta, StoryObj } from '@storybook/react';
import { PopUp } from '.';

const meta = {
  title: 'PopUp',
  component: PopUp,
} satisfies Meta<typeof PopUp>;

export default meta;
type Story = StoryObj<typeof PopUp>;

export const PopUpDefault: Story = {
  render: () => (
    <div
      style={{
        margin: '0 auto',
      }}
    >
      <PopUp
        title="Повторне відправлення посилання"
        textButton="open"
        href="#"
      />
    </div>
  ),
};
