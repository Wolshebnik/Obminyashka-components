import { useArgs } from '@storybook/client-api';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
  const [, updateArgs] = useArgs();

  const handleChangeLang = (el: { lang: string }) => {
    updateArgs({
      lang: el.lang,
    });
  };

  return <LanguageSelection onClick={handleChangeLang} {...args} />;
};

export const DefaultLanguageSelection = Template.bind({});
DefaultLanguageSelection.args = {
  lang: 'ua',
};
