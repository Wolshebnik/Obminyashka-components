import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BackButton } from '.';

export default {
  title: 'BackButton',
  component: BackButton,
  argTypes: {
    onClick: { action: 'Click' },
  },
} as ComponentMeta<typeof BackButton>;

const Template: ComponentStory<typeof BackButton> = (args) => <BackButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
};