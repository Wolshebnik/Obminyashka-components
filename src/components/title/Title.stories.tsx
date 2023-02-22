import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from '.';
import { argTypes } from './arg-types';

export default {
  title: 'Title',
  component: Title,
  argTypes,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const TitleDefault = Template.bind({});
TitleDefault.args = {
  text: 'Поточні пропозиції',
};

export const TitleWithStyles = Template.bind({});
TitleWithStyles.args = {
  text: 'Поточні пропозиції',
  style: { fontSize: 20 },
};

export const TitleWithoutDots = Template.bind({});
TitleWithoutDots.args = {
  text: 'Поточні пропозиції',
  hiddenDots: true,
};
