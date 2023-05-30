import type { Meta, StoryObj } from '@storybook/react';

import { ButtonNew } from '.';
import { argTypes } from './arg-types';

const meta = {
  title: 'ButtonNew',
  component: ButtonNew,
  argTypes,
} satisfies Meta<typeof ButtonNew>;

export default meta;
type Story = StoryObj<typeof ButtonNew>;

export const Button: Story = {
  args: {
    text: 'Add advertisement',
    plus: true,
    animated: true,
    colorType: 'green',
    disabled: false,
  },
};
