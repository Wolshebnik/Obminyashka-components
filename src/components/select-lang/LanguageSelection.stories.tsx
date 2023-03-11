import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { useState } from 'react';
import { useArgs } from '@storybook/client-api';

import { LanguageSelection } from '.';
import { argTypes } from './arg-types';

export default {
  title: 'LanguageSelection',
  component: LanguageSelection,
  description: { story: 'An example story description' },
  argTypes,
} as ComponentMeta<typeof LanguageSelection>;

const Template: ComponentStory<typeof LanguageSelection> = ({
  onClick,
  ...args
}) => {
  const languageArray = ['ua', 'en'];
  const [{ lang }, updateArgs] = useArgs();

  const handleChangeLang = () => {
    updateArgs({
      lang: languageArray.filter((el) => el !== lang).toString(),
    });
  };

  return <LanguageSelection onClick={handleChangeLang} {...args} />;
};

export const DefaultLanguageSelection = Template.bind({});
DefaultLanguageSelection.args = {
  lang: 'ua',
};
