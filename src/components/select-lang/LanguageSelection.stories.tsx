import { useArgs } from '@storybook/client-api';
import type { Meta, StoryObj } from '@storybook/react';

import { LanguageSelection } from '.';
import { IOnClickArg } from './types';
import { argTypes } from './arg-types';

const meta = {
  title: 'LanguageSelection',
  component: LanguageSelection,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: 'An example story description',
      },
    },
  },
} satisfies Meta<typeof LanguageSelection>;

export default meta;
type Story = StoryObj<typeof LanguageSelection>;

export const DefaultLanguageSelection: Story = {
  args: { lang: 'ua' },

  render: ({ onClick, ...args }) => {
    const [, updateArgs] = useArgs();

    const handleChangeLang = ({ lang }: IOnClickArg) => {
      updateArgs({
        lang,
      });
    };

    return <LanguageSelection onClick={handleChangeLang} {...args} />;
  },
};
