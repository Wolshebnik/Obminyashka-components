import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlockModal } from '.';

export default {
  title: 'BlockModal',
  component: BlockModal,
} as ComponentMeta<typeof BlockModal>;

const Template: ComponentStory<typeof BlockModal> = () => {
  return (
    <>
      <BlockModal>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam error
          nulla, deserunt dolorum aliquam vero officia sint nostrum dolores,
          pariatur, minus aperiam quod. Quia autem aut labore minus odio
          explicabo?
        </p>
      </BlockModal>
    </>
  );
};

export const PortalBlockModal = Template.bind({});
