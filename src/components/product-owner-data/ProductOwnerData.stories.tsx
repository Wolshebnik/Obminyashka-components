import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductOwnerData } from '.';
import { image } from '../avatar/mock';
import { argTypes } from './arg-types';

export default {
  title: 'ProductOwnerData',
  component: ProductOwnerData,
  argTypes,
} as ComponentMeta<typeof ProductOwnerData>;

const Template: ComponentStory<typeof ProductOwnerData> = (args) => (
  <div
    style={{
      backgroundColor: '#cccccc',
      padding: '130px 0',
    }}
  >
    <div
      style={{
        width: '35%',
        margin: '0 auto',
      }}
    >
      <ProductOwnerData {...args} />
    </div>
  </div>
);

export const ProductOwnerDataDefault = Template.bind({});
ProductOwnerDataDefault.args = {
  city: 'Kyev',
  avatar: image,
  name: 'Natali',
  date: '26.02.2023',
  cityText: 'Місто:',
  phoneText: 'Телефон:',
  phone: '097 357 37 77',
  dateText: 'Дата публікації:',
};
