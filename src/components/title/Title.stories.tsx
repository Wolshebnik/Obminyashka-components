import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from '.';
import { argTypes } from './args';

export default {
  title: 'Title',
  component: Title,
  argTypes,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const TitleDefault = Template.bind({});
TitleDefault.args = {
  text: 'title',
};
