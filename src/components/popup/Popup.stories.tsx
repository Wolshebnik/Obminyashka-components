import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './modal';
import { argTypes } from './arg-types';

export default {
  title: 'Modal',
  component: Modal,
  argTypes,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const PortalModal = Template.bind({});
PortalModal.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam error nulla, deserunt dolorum aliquam vero officia sint nostrum dolores, pariatur, minus aperiam quod. Quia autem aut labore minus odio explicabo?',
  width: '250px',
};
