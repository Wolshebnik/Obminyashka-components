import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from './index';

export default {
  title: 'CheckBox',
  component: CheckBox,
  argTypes: {
    onClick: { action: 'Click' },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
  gap: 18,
  text: 'Checkbox',
  checked: false,
};

export const CheckboxChecked = Template.bind({});
CheckboxChecked.args = {
  checked: true,
  margin: 26,
  text: 'checkedCheckbox',
  fontSize: 18,
};
