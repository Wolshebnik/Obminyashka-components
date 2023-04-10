import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './index';
import { argTypes } from './arg-types';

export default {
  title: 'Input',
  component: Input,
  argTypes,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(typeof e === 'string' ? e : e.target.value)}
    />
  );
};

export const Text = Template.bind({});
Text.args = {
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
};

export const textArea = Template.bind({});
textArea.args = {
  value: '',
  error: '',
  inputGap: '26px',
  type: 'textarea',
  name: 'textarea',
  placeholder: 'Placeholder',
  label: 'Опишіть Вашу річ: деффекти, особливості використання, тощо',
};

export const Password = Template.bind({});
Password.args = {
  value: '',
  error: '',
  inputGap: '',
  type: 'password',
  name: 'inputName',
  autoComplete: 'off',
  inputHeight: '50px',
  inputFlexDirection: '',
  placeholder: 'Placeholder',
  label: 'Введіть Ваш пароль',
};

export const Phone = Template.bind({});
Phone.args = {
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
};

export const Error = Template.bind({});
Error.args = {
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
};

export const Search = Template.bind({});
Search.args = {
  value: '',
  type: 'search',
  name: 'inputName',
  autoComplete: 'on',
  inputHeight: '50px',
  placeholder: 'Я шукаю...',
};
