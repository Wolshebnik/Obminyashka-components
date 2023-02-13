import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { argTypes } from './arg-types';

import { Input } from './index';

export default {
  title: 'Input',
  component: Input,
  argTypes: argTypes,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Input
      value={value}
      onChange={(e) => setValue(typeof e === 'string' ? e : e.target.value)}
      {...args}
    />
  );
};

export const Text = Template.bind({});
Text.args = {
  error: undefined,
  inputGap: undefined,
  type: 'text',
  name: 'inputName',
  label: 'Label text',
  inputFlexDirection: undefined,
  placeholder: 'Placeholder',
};

export const Password = Template.bind({});
Password.args = {
  error: '',
  inputGap: '',
  name: 'inputName',
  type: 'password',
  inputFlexDirection: '',
  placeholder: 'Placeholder',
  label: 'Введіть Ваш пароль',
};

export const Phone = Template.bind({});
Phone.args = {
  error: '',
  type: 'tel',
  name: 'Name',
  inputGap: '',
  label: 'Телефон:',
  labelColor: 'black',
  inputMaxWidth: '588px',
  inputFlexDirection: 'row',
  wrapperInputErrorWidth: '415px',
  placeholder: '+38(999) 999-99-99',
  inputJustifyContent: 'space-between',
};

export const Error = Template.bind({});
Error.args = {
  type: 'text',
  inputGap: '',
  error: 'Error',
  name: 'inputName',
  label: 'Label text',
  inputFlexDirection: '',
  placeholder: 'Placeholder',
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  name: 'inputName',
  placeholder: 'Я шукаю...',
};
