import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonTest } from './index';

export default {
  title: 'Example/Button',
  component: ButtonTest,
  argTypes: {
    onClick: { action: 'Click' },
  },
} as ComponentMeta<typeof ButtonTest>;

const Template: ComponentStory<typeof ButtonTest> = (args) => <ButtonTest {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  styleType: 'secondary',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const BackgroundSmall = Template.bind({});
BackgroundSmall.args = {
  size: 'small',
  label: 'Button',
  backgroundColor: '#4B14C8',
};
