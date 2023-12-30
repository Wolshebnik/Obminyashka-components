import type { Meta, StoryObj } from '@storybook/react';

import { SitePurpose } from '.';

const meta = {
  title: 'SitePurpose',
  component: SitePurpose,
} satisfies Meta<typeof SitePurpose>;

export default meta;
type Story = StoryObj<typeof SitePurpose>;

export const MainSitePurpose: Story = {
  args: {
    regText: 'Просто ',
    regTextLink: 'зарееструйся ',
    tradeTextLink: 'Обміняйтесь ',
    thingsTextLink: 'дитячих речей? ',
    thingsText: 'Накопичилося багато ',
    regTextTwo: 'та розмісти оголошення! ',
    tradeText: 'з іншими користувачами на шось кльове та корисне!',
  },
};
