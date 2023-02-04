import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from '.';
import { Background } from './styles';

export default {
  title: 'Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => (
  <Background>
    <Loader />
  </Background>
);

export const Primary = Template.bind({});
