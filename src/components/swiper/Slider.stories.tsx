import type { Meta, StoryObj } from '@storybook/react';

import { Swiper } from '.';
import * as Styles from './styles';
import { slidesData } from './mock';
import { argTypes } from './arg-types';

const meta = {
  title: 'Swiper',
  component: Swiper,
  argTypes,
  decorators: [
    (Story) => (
      <Styles.StoryWrapper>
        <Story />
      </Styles.StoryWrapper>
    ),
  ],
} satisfies Meta<typeof Swiper>;

export default meta;
type Story = StoryObj<typeof Swiper>;

export const DefaultSlider: Story = {
  args: {
    data: slidesData,
  },
};
