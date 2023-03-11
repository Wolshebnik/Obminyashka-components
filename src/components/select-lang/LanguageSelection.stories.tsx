import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

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
  lang,
  ...args
}) => {
  const languageArray = ['ua', 'en'];
  const [language, setLanguage] = useState(lang);

  const handleChangeLang = () => {
    setLanguage(languageArray.filter((el) => el !== language).toString());
  };

  return (
    <LanguageSelection lang={language} onClick={handleChangeLang} {...args} />
  );
};

export const DefaultLanguageSelection = Template.bind({});
DefaultLanguageSelection.args = {
  lang: 'ua',
};
