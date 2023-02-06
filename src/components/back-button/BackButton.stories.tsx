import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BackButton } from '.';
import {Icon} from '..'
export default {
  title: 'BackButton',
  component: BackButton,
  argTypes: {
    onClick: { action: 'Click' },
  },
} as ComponentMeta<typeof BackButton>;

const Template: ComponentStory<typeof BackButton> = (args) => <BackButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Button',
};

export const WithAnotherIcon = Template.bind({});
WithAnotherIcon.args = {
  text: 'Button',
  icon: < Icon.Eve/>
};