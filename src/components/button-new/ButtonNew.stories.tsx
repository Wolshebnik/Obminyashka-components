import type { Meta, StoryObj } from '@storybook/react';

import { ButtonNew } from '.';
import * as Icon from '../icon';
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
    plus: true,
    animated: true,
    disabled: false,
    colorType: 'green',
    styleType: 'default',
    text: 'Add advertisement',
  },
};

export const BlueButton: Story = {
  args: {
    plus: false,
    text: 'View',
    animated: true,
    disabled: false,
    colorType: 'blue',
    styleType: 'default',
  },
};

export const OutLineButton: Story = {
  args: {
    plus: false,
    animated: false,
    disabled: false,
    text: 'Show more',
    colorType: 'blue',
    styleType: 'outline',
    icon: <Icon.FbRegistration />,
  },
};

export const FbButton: Story = {
  args: {
    plus: false,
    square: true,
    animated: false,
    disabled: false,
    styleType: 'outline',
    icon: <Icon.FbRegistration />,
  },
};

export const GoogleButton: Story = {
  args: {
    plus: false,
    square: true,
    animated: false,
    disabled: false,
    styleType: 'outline',
    icon: <Icon.GoogleRegistration />,
  },
};

export const AppleButton: Story = {
  args: {
    plus: false,
    square: true,
    animated: false,
    disabled: false,
    styleType: 'outline',
    icon: <Icon.AppleRegistration />,
  },
};
