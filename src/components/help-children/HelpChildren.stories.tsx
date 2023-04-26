import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HelpChildren } from '.';
import { Wrapper } from './styles';
import { argTypes } from './arg-types';

export default {
  title: 'Help children',
  component: HelpChildren,
  argTypes,
} as ComponentMeta<typeof HelpChildren>;

const Template: ComponentStory<typeof HelpChildren> = (args) => (
  <Wrapper>
    <HelpChildren {...args} />
  </Wrapper>
);

export const HelpChildrenDefault = Template.bind({});
HelpChildrenDefault.args = {
  name: 'Obminyashka',
  buttonText: 'I want to help children!',
  title: 'There are no other peoples children!',
  text: 'cooperates with volunteer organizations for all over Ukraine! You can help too! Give your unnecessary things, they will end up in orphanages and orphanages!',
};
