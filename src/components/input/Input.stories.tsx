import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './index';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Input value={value} onChange={(e) => setValue(e.target.value)} {...args} />
  );
};

export const Text = Template.bind({});
Text.args = {
  error: '',
  type: 'text',
  name: 'Name',
  inputGap: '',
  label: 'Label text',
  inputFlexDirection: '',
  placeholder: 'Placeholder',
};

export const Password = Template.bind({});
Password.args = {
  error: '',
  inputGap: '',
  name: 'Name',
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
  placeholder: '+38(999) 999-99-99',
  inputJustifyContent: 'space-between',
  wrapperInputErrorWidth: '415px',
};

export const Error = Template.bind({});
Error.args = {
  type: 'text',
  name: 'Name',
  inputGap: '',
  error: 'Error',
  label: 'Label text',
  inputFlexDirection: '',
  placeholder: 'Placeholder',
};
