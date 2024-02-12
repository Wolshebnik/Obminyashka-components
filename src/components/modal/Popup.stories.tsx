import type { Meta, StoryObj } from '@storybook/react';

import { ChildrenProps } from 'types';
import { useDelayAnimation } from 'hooks';

import { Modal } from '.';
import { IModal } from './types';
import { Button } from '../button';
import { mockChildren } from './mock';
import { argTypes } from './arg-types';

const meta = {
  title: 'Modal',
  component: Modal,
  argTypes,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

const Template = (args: ChildrenProps<IModal>) => {
  const { duration } = args;
  const checkedDuration = duration ? duration : 500;
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(checkedDuration);

  const { children, ...rest } = args;

  return (
    <>
      <Button onClick={() => setOpen(true)} text="Open" />
      <Modal
        {...rest}
        isOpen={isOpen}
        isAnimation={isAnimation}
        duration={checkedDuration}
        onClose={() => setOpen(false)}
      >
        {children}
      </Modal>
    </>
  );
};

export const PortalModal: Story = {
  args: {
    children: mockChildren,
  },
  render: (args) => <Template {...args} />,
};

export const WithoutBg: Story = {
  args: { withoutBg: true, children: mockChildren },
  render: (args) => <Template {...args} />,
};

export const WithoutBtn: Story = {
  args: { hideButtonClose: true, children: mockChildren },
  render: (args) => <Template {...args} />,
};
