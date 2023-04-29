import type { Meta, StoryObj } from '@storybook/react';

import { BackButton } from '.';
import * as Icon from '../icon';
import { argTypes } from './arg-types';

const meta = {
  title: 'BackButton',
  component: BackButton,
  argTypes,
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: {
    text: 'Button',
    icon: <Icon.ChevronLeft />,
  },
};

export const WithAnotherIcon: Story = {
  args: {
    text: 'Button',
    icon: <Icon.Loader />,
  },
};
