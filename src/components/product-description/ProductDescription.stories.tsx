import type { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from './styles';
import { ProductDescription } from '.';
import { argTypes } from './arg-types';

const meta = {
  title: 'ProductDescription',
  component: ProductDescription,
  argTypes,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
} satisfies Meta<typeof ProductDescription>;

export default meta;
type Story = StoryObj<typeof ProductDescription>;

export const ProductDescriptionDefault: Story = {
  args: {
    title: 'Автівка',
    description: 'Автівка Merсedes-Benz',
  },
};
