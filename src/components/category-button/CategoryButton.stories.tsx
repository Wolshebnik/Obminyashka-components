import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { argTypes } from './arg-types';
import { CategoryButton } from './index';

export default {
  title: 'CategoryButton',
  component: CategoryButton,
  argTypes,
} as ComponentMeta<typeof CategoryButton>;

const Template: ComponentStory<typeof CategoryButton> = (args) => {
  const [open, setOpen] = useState(false);

  return <CategoryButton {...args} open={open} setOpen={setOpen} />;
};

export const ButtonCategoryDefault = Template.bind({});
ButtonCategoryDefault.args = {
  top: 20,
  left: 20,
  text: 'КАТЕГОРІЇ',
};
