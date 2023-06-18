import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ChildrenProps } from 'types';
import { useDelayAnimation } from 'hooks';

import { Modal } from '.';
import { IModal } from './types';
import { Button } from '../button';
import { Overlay } from '../overlay';
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
  const checkedDuration = duration ? duration : 1000;

  const childRef = useRef<HTMLDivElement>(null);
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(checkedDuration);
  const { children, ...rest } = args;

  return (
    <>
      <Button onClick={() => setOpen(true)} text="Open" />
      <Overlay
        isOpen={isOpen}
        childRef={childRef}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
      >
        <Modal {...rest} isOpen={isOpen} onClose={setOpen} ref={childRef}>
          {children}
        </Modal>
      </Overlay>
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
