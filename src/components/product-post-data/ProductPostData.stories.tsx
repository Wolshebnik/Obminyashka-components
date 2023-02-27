import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductPostData } from '.';
import { argTypes } from './arg-types';
import { OwnerAndPost } from './styles';

export default {
  title: 'pages/Product Post Data',
  component: ProductPostData,
  argTypes,
} as ComponentMeta<typeof ProductPostData>;

const Template: ComponentStory<typeof ProductPostData> = (args) => (
  <OwnerAndPost>
    <ProductPostData {...args} />
  </OwnerAndPost>
);

export const ProductPostDefault = Template.bind({});
ProductPostDefault.args = {
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
};
