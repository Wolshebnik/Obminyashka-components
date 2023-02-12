import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from '.';
import { Background } from './styles';

export default {
  title: 'Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
  <Background>
    <Loader {...args} />
  </Background>
);

export const DefaultLoader = Template.bind({});
DefaultLoader.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  styleType: 'secondary',
};
