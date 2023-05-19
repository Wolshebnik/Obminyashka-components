import type { Meta, StoryObj } from '@storybook/react';

import { PresentationHeader } from 'components/shared';

import { Burger } from '.';
import { argTypes } from './arg-types';
import { burgerMenuItems } from './mock';

const meta = {
  title: 'Burger',
  component: Burger,
  argTypes,
  decorators: [
    (Story) => (
      <PresentationHeader>
        <Story />
      </PresentationHeader>
    ),
  ],
} satisfies Meta<typeof Burger>;

export default meta;
type Story = StoryObj<typeof Burger>;

export const BurgerIcon: Story = {
  args: {
    burgerMenuItems,
  },
};
