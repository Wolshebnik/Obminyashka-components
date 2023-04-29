import type { Meta, StoryObj } from '@storybook/react';

import { Image } from '.';
import { argTypes } from './arg-types';

const url =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RU6qRg_WySsA_1L3g8epabIBD7WejcWTcf70n5Thi9O_aGWnf20ypkJ3len0A4MV9l0&usqp=CAU';

const meta = {
  title: 'Image',
  component: Image,
  argTypes,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const ImageDefault: Story = { args: { source: url } };

export const ImageMiddle: Story = {
  args: { width: 50, height: 50, source: url },
};

export const ImageBig: Story = {
  args: {
    width: 100,
    height: 100,
    source: url,
  },
};
