import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';
import * as Icon from '../icon';
import { argTypes } from './arg-types';

const meta = {
  title: 'Button',
  component: Button,
  argTypes,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const BlueButton: Story = {
  args: {
    text: 'Button',
  },
};

export const GreenButton: Story = {
  args: {
    text: 'Button',
    colorType: 'green',
    icon: <Icon.Plus />,
  },
};

export const ButtonIcon: Story = {
  args: { text: 'Button', icon: <Icon.Google /> },
};

export const ButtonIconRight: Story = {
  args: {
    text: 'Button',
    orderRight: true,
    icon: <Icon.Google />,
    nativeIcon: false,
  },
};

export const ButtonAnimation: Story = {
  args: {
    text: 'button',
    isLoading: true,
    animationType: 'secondary',
  },
};

export const AddRemove: Story = {
  args: {
    gap: 34,
    width: 34,
    height: 34,
    outsideText: true,
    colorType: 'green',
    icon: <Icon.Plus />,
    text: 'Додати поле',
  },
};

export const AddRemoveEmpty: Story = {
  args: {
    gap: 34,
    width: 34,
    height: 34,
    colorType: 'grey',
    outsideText: true,
    icon: <Icon.Plus />,
  },
};
