import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from '.';

export default {
  title: 'Title',
  component: Title,
  argTypes: {
    onClick: { action: 'Click' },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const TitleDefault = Template.bind({});
TitleDefault.args = {
  text: "title",
};