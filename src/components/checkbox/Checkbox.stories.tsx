import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from './index';
import { argTypes } from './arg-types';

export default {
  title: 'Input',
  component: CheckBox,
  argTypes,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (<CheckBox
    {...args}
    checked={checked}
    onChange={() => setChecked(!checked)}
  />);
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  gap: 18,
  text: 'Checkbox',
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  gap: 18,
  text: 'RadioBtn',
};
