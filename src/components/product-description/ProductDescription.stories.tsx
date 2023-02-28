import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Wrapper } from './styles';
import { ProductDescription } from '.';
import { argTypes } from './arg-types';

export default {
  title: 'ProductDescription',
  component: ProductDescription,
  argTypes,
} as ComponentMeta<typeof ProductDescription>;

const Template: ComponentStory<typeof ProductDescription> = (args) => (
  <Wrapper>
    <ProductDescription {...args} />
  </Wrapper>
);

export const ProductDescriptionDefault = Template.bind({});
ProductDescriptionDefault.args = {
  title: 'Автівка',
  description: 'Автівка Merсedes-Benz',
};
