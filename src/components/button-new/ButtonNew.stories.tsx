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
    text: 'ДОДАТИ ОГОЛОШЕННЯ',
    plus: true,
    width: 290,
    height: 50,
    animated: true,
    colorType: 'green',
    disabled: false,
    hover: true,
  },
};
