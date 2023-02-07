import { ComponentStory, ComponentMeta } from '@storybook/react';
import {useState} from "react";

import { Input } from './index';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

 return  <Input value={value} onChange={(e)=>setValue(e.target.value)} {...args} />
};

export const Authorization = Template.bind({});
Authorization.args = {
  error:'Error',
  placeholder: 'Placeholder',
  label: 'Label text',
  type: 'text',
  name: 'Name',
  mbInput:'',
  styleType:'authorization',
  iconTopPosition:'',
};
export const Profile = Template.bind({});
Profile.args = {
  error:'Не вірний формат телефону',
  placeholder: "+38(999) 999-99-99",
  label: 'Label text',
  type: 'text',
  name: 'Name',
  phone:true,
  mbInput:'',
  iconTopPosition:'',
  styleType:'profile'
};
