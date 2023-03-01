import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LanguageSelection } from '.';
import { argTypes } from './arg-types';

export default {
  title: 'LanguageSelection',
  component: LanguageSelection,
  argTypes,
} as ComponentMeta<typeof LanguageSelection>;

const Template: ComponentStory<typeof LanguageSelection> = (args) => (
  <LanguageSelection {...args} />
);

export const DefaultLanguageSelection = Template.bind({});
DefaultLanguageSelection.args = {
  languageArray: [
    { value: 'ua', checked: true },
    { value: 'en', checked: false },
  ],
};
