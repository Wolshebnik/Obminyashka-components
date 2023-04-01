import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Subtitle } from '.';
import { argTypes } from './arg-types';

export default {
  title: 'Subtitle',
  component: Subtitle,
  argTypes,
} as ComponentMeta<typeof Subtitle>;

const Template: ComponentStory<typeof Subtitle> = (args) => (
  <Subtitle {...args} />
);

export const SubtitleDefault = Template.bind({});
SubtitleDefault.args = {
  textTitle: 'Виберiть роздiл',
};

export const WithoutStar = Template.bind({});
WithoutStar.args = {
  hiddenStar: true,
  textTitle: 'Опис товара',
};

export const OtherFont = Template.bind({});
OtherFont.args = {
  style: { fontFamily: 'Roboto' },
  textTitle: 'Завантажте фотографії ваших речей ',
};
