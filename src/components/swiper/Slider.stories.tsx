import type { Meta, StoryObj } from '@storybook/react';

import { MainSwiper } from '.';
import * as Styles from './styles';
import { slidesData } from './mock';
import { argTypes } from './arg-types';

const meta = {
  title: 'MainSwiper',
  component: MainSwiper,
  argTypes,
  decorators: [
    (Story) => (
      <Styles.StoryWrapper>
        <Story />
      </Styles.StoryWrapper>
    ),
  ],
} satisfies Meta<typeof MainSwiper>;

export default meta;
type Story = StoryObj<typeof MainSwiper>;

export const DefaultSlider: Story = {
  args: {
    data: slidesData,
  },
};
