import type { Meta, StoryObj } from '@storybook/react';

import { Burger } from '.';
import { argTypes } from './arg-types';

const meta = {
  title: 'Burger',
  component: Burger,
  argTypes,
} satisfies Meta<typeof Burger>;

export default meta;
type Story = StoryObj<typeof Burger>;

export const BurgerIcon: Story = {};
