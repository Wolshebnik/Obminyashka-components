import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Burger } from '.';

import { argTypes } from './arg-types';

export default {
  title: 'Burger',
  component: Burger,
  argTypes,
} as ComponentMeta<typeof Burger>;

const Template: ComponentStory<typeof Burger> = (args) => <Burger {...args} />;

export const BurgerIcon = Template.bind({});
