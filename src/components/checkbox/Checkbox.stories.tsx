import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from './index';
import { argTypes } from './arg-types';

const meta = {
  title: 'Checkbox',
  component: CheckBox,
  argTypes,
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Checkbox: Story = {
  args: {
    text: 'Checkbox',
    name: 'checkbox',
  },
  render: (args) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
};

export const RadioButton: Story = {
  ...Checkbox,
  args: {
    gap: 20,
    type: 'radio',
    text: 'Radio',
    name: 'radio',
  },
};
