/* eslint-disable no-console */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MockData } from './types';
import * as Styles from './styles';
import { CategoryFilterSelect } from './index';
import { categoryData, filterData } from './mock';
import { cities, regions } from './location/mock';

const meta = {
  title: 'CategoryFilterSelect',
  component: CategoryFilterSelect,
} satisfies Meta<typeof CategoryFilterSelect>;

export default meta;
type Story = StoryObj<typeof CategoryFilterSelect>;

const Template = () => {
  const [locationId, setLocationId] = useState<string>('');
  const [isOpenCategory, setIsOpenCategory] = useState<number>(0);
  const [selectedCategory, setIsSelectedCategory] = useState<string>('');

  const disabledSelects = ['size(clothes)', 'size(shoes)'];

  const getRegions = async () => {
    return regions;
  };

  const getCities = async () => {
    if (locationId) {
      return cities;
    }
    return [];
  };

  console.log('locationId', locationId);

  return (
    <Styles.StoryWrapper>
      <div>
        {categoryData.map((category: MockData) => (
          <CategoryFilterSelect
            id={category.id}
            type={category.type}
            key={category.title}
            title={category.title}
            options={category.options}
            setIsOpenCategory={setIsOpenCategory}
            setIsSelectedCategory={setIsSelectedCategory}
            isOpenCategory={isOpenCategory === category.id}
          />
        ))}
      </div>

      <div>
        {filterData.map((category: MockData) => (
          <CategoryFilterSelect
            id={category.id}
            type={category.type}
            key={category.title}
            getCities={getCities}
            title={category.title}
            getRegions={getRegions}
            options={category.options}
            disabled={disabledSelects}
            setLocationId={setLocationId}
            selectedCategory={selectedCategory}
          />
        ))}
      </div>
    </Styles.StoryWrapper>
  );
};

export const SelectCategory: Story = {
  render: () => <Template />,
};
