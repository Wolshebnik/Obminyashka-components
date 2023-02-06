import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AllIcons } from './all-icons';

import { Icon as IconComponent } from '..';

export default {
  title: 'Icons/Icons',
  component: AllIcons,
} as ComponentMeta<typeof AllIcons>;

const Template: ComponentStory<typeof AllIcons> = (props) => (
  <AllIcons {...props} />
);

export const Icon = Template.bind({});
Icon.args = {
  Icon: IconComponent,
};
