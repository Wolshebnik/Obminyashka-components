import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ResetAllButton } from '.';

export default {
  title: 'ResetAllButton',
  component: ResetAllButton,
} as ComponentMeta<typeof ResetAllButton>;

const Template: ComponentStory<typeof ResetAllButton> = (args) => (
  <ResetAllButton {...args} />
);

export const ResetAllButtonDefault = Template.bind({});
