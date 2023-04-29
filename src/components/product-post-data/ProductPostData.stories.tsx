import type { Meta, StoryObj } from '@storybook/react';

import { ProductPostData } from '.';
import { argTypes } from './arg-types';
import { OwnerAndPost } from './styles';

const meta = {
  title: 'Product Post Data',
  component: ProductPostData,
  argTypes,
  decorators: [
    (Story) => (
      <OwnerAndPost>
        <Story />
      </OwnerAndPost>
    ),
  ],
} satisfies Meta<typeof ProductPostData>;

export default meta;
type Story = StoryObj<typeof ProductPostData>;

export const ProductPostDefault: Story = {
  args: {
    age: '6-8',
    lang: 'en',
    season: 'Лiто',
    title: 'Футболка',
    gender: 'хлопчик',
    readyForOffers: true,
    translatedTextAge: 'Вік',
    wishes: ['куртка', 'худі'],
    translatedTextSize: 'Розмір',
    translatedTextSeason: 'Сезон',
    translatedTextGender: 'Стать',
    buttonText: 'Запропонувати обмін',
    translatedTextDescription: 'Oпис',
    translatedTextChangesTo: 'Обмінюю на',
    translatedTextCheckInUl: 'Ваші пропозіціі',
  },
};
