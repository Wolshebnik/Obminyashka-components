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
      value={value}
      onChange={(e) => setValue(typeof e === 'string' ? e : e.target.value)}
      {...args}
    />
  );
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  error: undefined,
  name: 'inputName',
  label: 'Label text',
  inputGap: undefined,
  placeholder: 'Placeholder',
  inputFlexDirection: undefined,
};

export const Password = Template.bind({});
Password.args = {
  error: '',
  inputGap: '',
  type: 'password',
  name: 'inputName',
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
  errorGap: '5px',
  name: 'inputName',
  label: 'Label text',
  errorFontSize: '16px',
  inputFlexDirection: '',
  placeholder: 'Placeholder',
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  name: 'inputName',
  placeholder: 'Я шукаю...',
};
