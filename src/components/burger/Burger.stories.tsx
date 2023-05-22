import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PresentationHeader } from 'components/shared';

import { Burger } from '.';
import { argTypes } from './arg-types';
import { burgerMenuItems } from './mock';
import { IBurger, IOnClickArg } from './types';

const meta = {
  title: 'Burger',
  component: Burger,
  argTypes,
} satisfies Meta<typeof Burger>;

export default meta;
type Story = StoryObj<typeof Burger>;

const Template = (args: IBurger) => {
  const [lang, setStateLang] = useState('ua');

  const handleChangeLang = ({ lang: newLang }: IOnClickArg) => {
    setStateLang(newLang);
  };

  return (
    <PresentationHeader>
      <Burger {...args} onSelectLanguage={handleChangeLang} lang={lang} />
    </PresentationHeader>
  );
};

export const BurgerIcon: Story = {
  args: {
    data: burgerMenuItems,
  },
  render: (args) => <Template {...args} />,
};
