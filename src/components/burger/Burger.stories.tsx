import type { Meta, StoryObj } from '@storybook/react';

import { Burger } from '.';
import { argTypes } from './arg-types';
import { burgerMenuText } from './mock';

const meta = {
  title: 'Burger',
  component: Burger,
  argTypes,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Burger>;

export default meta;
type Story = StoryObj<typeof Burger>;

export const BurgerIcon: Story = {
  args: {
    burgerMenuText,
  },
};
