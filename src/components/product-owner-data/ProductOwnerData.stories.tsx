import type { Meta, StoryObj } from '@storybook/react';

import { ProductOwnerData } from '.';
import { image } from '../avatar/mock';
import { argTypes } from './arg-types';

const meta = {
  title: 'ProductOwnerData',
  component: ProductOwnerData,
  argTypes,
  decorators: [
    (Story) => (
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
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof ProductOwnerData>;

export default meta;
type Story = StoryObj<typeof ProductOwnerData>;

export const ProductOwnerDataDefault: Story = {
  args: {
    city: 'Kyev',
    avatar: image,
    name: 'Natali',
    date: '26.02.2023',
    cityText: 'Місто:',
    phoneText: 'Телефон:',
    phone: '097 357 37 77',
    dateText: 'Дата публікації:',
  },
};
