import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '.';
import { Button } from '../button';
import { mockChildren } from './mock';
import { argTypes } from './arg-types';

export default {
  title: 'Modal',
  component: Modal,
  argTypes,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, onClose] = useState(false);
  const { children, ...rest } = args;

  return (
    <>
      <Button onClick={() => onClose(true)} text="Open" />
      <Modal {...rest} isOpen={isOpen} onClose={onClose}>
        {children}
      </Modal>
    </>
  );
};

export const PortalModal = Template.bind({});
PortalModal.args = {
  children: mockChildren,
};

export const WithoutBg = Template.bind({});
WithoutBg.args = {
  withoutBg: true,
  children: mockChildren,
};

export const WithoutBtn = Template.bind({});
WithoutBtn.args = {
  hideButtonClose: true,
  children: mockChildren,
};
