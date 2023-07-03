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
    thingsText: 'Накопичилося багато дитячих речей? ',
    regText: 'Просто зарееструйся та розмісти оголошення! ',
    tradeText: 'Обміняйтесь з іншими користувачами на шось кльове та корисне!',
  },
};
