import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductDescription } from '.';
import { argTypes } from './arg-types';

export default {
  title: 'ProductDescription',
  component: ProductDescription,
  argTypes,
} as ComponentMeta<typeof ProductDescription>;

const Template: ComponentStory<typeof ProductDescription> = (args) => (
  <ProductDescription {...args} />
);

export const ProductDescriptionDefault = Template.bind({});
ProductDescriptionDefault.args = {
  title: 'Автівка',
  description: 'Автівка Mercedes-Benz',
};
