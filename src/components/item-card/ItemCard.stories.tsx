import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductCard } from '.';
import { image } from '../avatar/mock';
import { argTypes } from './arg-types';

export default {
  title: 'ProductCard',
  component: ProductCard,
  argTypes,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const ProductCardWithItem = Template.bind({});
ProductCardWithItem.args = {
  city: 'NEW YORK',
  text: 'hoody',
  picture:
    'https://gfx.garnamama.com/pub/products/235/196235/1600x1600/2EI~124024-7.jpg',
  isFavorite: true,
  avatar: image,
  inboxMessage: 9,
  buttonText: 'button',
};
