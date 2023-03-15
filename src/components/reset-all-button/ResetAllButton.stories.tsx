import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ResetAllButton } from '.';

export default {
  title: 'ResetAllButton',
  component: ResetAllButton,
} as ComponentMeta<typeof ResetAllButton>;

const Template: ComponentStory<typeof ResetAllButton> = (args) => (
  <ResetAllButton {...args} />
);

export const ResetButton = Template.bind({});
ResetButton.args = {
  text: 'Cancel Everything',
};
