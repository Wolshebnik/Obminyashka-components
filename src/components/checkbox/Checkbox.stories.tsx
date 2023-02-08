import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from './index';
import { useState } from 'react';

export default {
  title: 'CheckBox',
  component: CheckBox,
  argTypes: {
    handleClick: {
      action: 'Click',
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  const [checked, setChecked] = useState<boolean>(false);
  return <CheckBox
    {...args}
    checked={checked}
    onClick={() => setChecked(!checked)}
  />;
};

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
  gap: 18,
  text: 'Checkbox',
};
