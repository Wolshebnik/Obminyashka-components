import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Crop } from '.';
import { lot6 } from '../img';
import { Modal } from '../modal';
import { Button } from '../button';

export default {
  title: 'Crop',
  component: Crop,
} as ComponentMeta<typeof Crop>;

export const Template: ComponentStory<typeof Crop> = (args) => {
  const [isOpen, setOpen] = useState(false);
  const [isSaveLoading] = useState(false);
  const [, setImg] = useState({});
  return (
    <>
      <Button onClick={() => setOpen(true)} text="Open me" />
      <Modal isOpen={isOpen} hideButtonClose onClose={() => setOpen(false)}>
        <Crop
          {...args}
          onSave={(e: object) => setImg(e)}
          isSaveLoading={isSaveLoading}
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
};

export const Image = Template.bind({});
Image.args = {
  image: lot6,
};
