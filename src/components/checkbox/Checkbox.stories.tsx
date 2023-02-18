import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from './index';
import { argTypes } from './arg-types';

export default {
  title: 'Checkbox',
  component: CheckBox,
  argTypes,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <CheckBox
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  text: 'Checkbox',
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  gap: 20,
  type: 'radio',
  text: 'Radio',
};
