import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LanguageSelection } from '.';
import { argTypes } from './arg-types';

export default {
  title: 'LanguageSelection',
  component: LanguageSelection,
  description: { story: 'An example story description' },
  argTypes,
} as ComponentMeta<typeof LanguageSelection>;

const Template: ComponentStory<typeof LanguageSelection> = (args) => {
  return <LanguageSelection {...args} />;
};

export const DefaultLanguageSelection = Template.bind({});
DefaultLanguageSelection.args = {
  lang: 'ua',
  /* onClick: () => {
    DefaultLanguageSelection.args?.lang : {'en'};
  }, */
  //onClick: { action: 'clicked' },
};
