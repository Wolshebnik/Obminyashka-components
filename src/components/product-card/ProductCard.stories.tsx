import type { Meta, StoryObj } from '@storybook/react';

import { ProductCard } from '.';
import { image } from '../avatar/mock';
import { argTypes } from './arg-types';

const meta = {
  title: 'ProductCard',
  component: ProductCard,
  argTypes,
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const ProductCardWithItem: Story = {
  args: {
    text: 'hoodi',
    avatar: image,
    inboxMessage: 7,
    city: 'NEW YORK',
    isFavorite: true,
    buttonText: 'button',
    picture:
      'https://gfx.garnamama.com/pub/products/235/196235/1600x1600/2EI~124024-7.jpg',
  },
};
