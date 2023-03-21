import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '.';
import { Button } from '../button';
import { argTypes } from './arg-types';

export default {
  title: 'Modal',
  component: Modal,
  argTypes,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [isOpen, onClose] = useState(false);

  return (
    <>
      <Button onClick={() => onClose(true)} text="Open" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam error
          nulla, deserunt dolorum aliquam vero officia sint nostrum dolores,
          pariatur, minus aperiam quod. Quia autem aut labore minus odio
          explicabo?
        </p>
      </Modal>
    </>
  );
};

export const PortalModal = Template.bind({});
