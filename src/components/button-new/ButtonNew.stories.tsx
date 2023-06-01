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

export const GreenButton: Story = {
  args: {
    text: 'Add advertisement',
    plus: true,
    animated: true,
    colorType: 'green',
    disabled: false,
    styleType: 'default',
  },
};

export const BlueButton: Story = {
  args: {
    text: 'View',
    plus: false,
    animated: true,
    colorType: 'blue',
    disabled: false,
    styleType: 'default',
  },
};

export const OutLineButton: Story = {
  args: {
    text: 'Show more',
    plus: false,
    animated: false,
    colorType: 'blue',
    disabled: false,
    styleType: 'outline',
  },
};
