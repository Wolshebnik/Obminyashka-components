import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './index';
import { InputProps } from './types';
import { argTypes } from './arg-types';

const meta = {
  title: 'Input',
  component: Input,
  argTypes,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

const Template = (args: InputProps) => {
  const [value, setValue] = useState('');

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(typeof e === 'string' ? e : e.target.value)}
    />
  );
};

export const Text: Story = {
  args: {
    value: '',
    type: 'text',
    inputHeight: '',
    error: undefined,
    name: 'inputName',
    autoComplete: 'on',
    inputGap: undefined,
    label: 'Label text',
    placeholder: 'Placeholder',
    inputFlexDirection: undefined,
  },
  render: (args) => <Template {...args} />,
};

export const textArea: Story = {
  args: {
    value: '',
    error: '',
    inputGap: '26px',
    type: 'textarea',
    name: 'textarea',
    placeholder: 'Placeholder',
    label: 'Опишіть Вашу річ: деффекти, особливості використання, тощо',
  },
  render: (args) => <Template {...args} />,
};

export const Password: Story = {
  args: {
    value: '',
    error: '',
    inputGap: '26px',
    type: 'password',
    name: 'inputName',
    autoComplete: 'off',
    inputHeight: '50px',
    inputFlexDirection: '',
    placeholder: 'Placeholder',
    label: 'Введіть Ваш пароль',
  },
  render: (args) => <Template {...args} />,
};

export const Phone: Story = {
  args: {
    value: '',
    error: '',
    type: 'tel',
    name: 'Name',
    inputGap: '',
    inputHeight: '',
    label: 'Телефон:',
    autoComplete: 'on',
    labelColor: 'black',
    inputMaxWidth: '588px',
    inputFlexDirection: 'row',
    wrapperInputErrorWidth: '415px',
    placeholder: '+380(99)999-99-99',
    inputJustifyContent: 'space-between',
  },
  render: (args) => <Template {...args} />,
};

export const Error: Story = {
  args: {
    value: '',
    type: 'text',
    inputGap: '',
    error: 'Error',
    errorGap: '5px',
    inputHeight: '',
    name: 'inputName',
    autoComplete: 'on',
    label: 'Label text',
    errorFontSize: '16px',
    inputFlexDirection: '',
    placeholder: 'Placeholder',
  },
  render: (args) => <Template {...args} />,
};

export const Search: Story = {
  args: {
    value: '',
    type: 'search',
    name: 'inputName',
    autoComplete: 'on',
    inputHeight: '50px',
    placeholder: 'Я шукаю...',
  },
  render: (args) => <Template {...args} />,
};
