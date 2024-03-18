import type { Meta, StoryObj } from '@storybook/react';
import { PopUp } from '.';
import { useState } from 'react';

const meta = {
  title: 'PopUp',
  component: PopUp,
} satisfies Meta<typeof PopUp>;

export default meta;
type Story = StoryObj<typeof PopUp>;

const Template = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div
      style={{
        margin: '0 auto',
      }}
    >
      <PopUp
        href="#"
        textButton="open"
        modalActive={modalActive}
        setModalActive={setModalActive}
        title="Повторне відправлення посилання"
      />
    </div>
  );
};

export const PopUpDefault: Story = {
  render: () => <Template />,
};
