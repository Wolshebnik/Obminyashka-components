import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { argTypes } from './arg-types';
import { ButtonCategory } from './index';

export default {
  title: 'ButtonCategory',
  component: ButtonCategory,
  // argTypes,
} as ComponentMeta<typeof ButtonCategory>;

const Template: ComponentStory<typeof ButtonCategory> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <ButtonCategory {...args} open={open} text="category" setOpen={setOpen} />
  );
};

export const ButtonCategoryDefault = Template.bind({});
