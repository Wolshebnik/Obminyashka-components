import type { Meta, StoryObj } from '@storybook/react';

import * as IconComponent from '.';
import { AllIcons } from './all-icons';

const meta = {
  title: 'Icons/Icons',
  component: AllIcons,
} satisfies Meta<typeof AllIcons>;

export default meta;
type Story = StoryObj<typeof AllIcons>;

export const Icon: Story = { args: { Icon: IconComponent } };
