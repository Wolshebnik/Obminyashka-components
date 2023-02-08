import {useState} from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './index';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  if (args.styleType === "profile") {
    return (
      <div style={{maxWidth:'600px'} }>
        <Input value={value} onChange={(e)=>setValue(e.target.value)} {...args} />
      </div>)
  } else return  <Input value={value} onChange={(e)=>setValue(e.target.value)} {...args} />
};

export const Authorization = Template.bind({});
Authorization.args = {
  inputMB:'',
  type: 'text',
  name: 'Name',
  error:'Error',
  labelSpanMB:'',
  iconTopPosition:'',
  label: 'Label text',
  styleType:'authorization',
  placeholder: 'Placeholder'
};

export const Profile = Template.bind({});
Profile.args = {
  inputMB:'',
  phone:true,
  name: 'Name',
  type: 'text',
  iconTopPosition:'',
  label: 'Label text',
  styleType:'profile',
  placeholder: "+38(999) 999-99-99",
  error:'Не вірний формат телефону',
};
