import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TestButton } from './index';

export default {
  title: 'Example/TestButton',
  component: TestButton,
  argTypes: {
    onClick: { action: 'Click' },
  },
} as ComponentMeta<typeof TestButton>;

const Template: ComponentStory<typeof TestButton> = (arg) => (
  <TestButton {...arg} />
);

export const Button = Template.bind({});
Button.args = {
  label: 'Test button',
};
