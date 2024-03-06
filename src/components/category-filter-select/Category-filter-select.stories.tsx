/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MockData } from './types';
import * as Styles from './styles';
import { CategoryFilterSelect } from './index';
import { categoryData, filterData } from './mock';
import { cities, regions } from './location/mock';
import { ILocation } from './location/types';

const meta = {
  title: 'CategoryFilterSelect',
  component: CategoryFilterSelect,
} satisfies Meta<typeof CategoryFilterSelect>;

export default meta;
type Story = StoryObj<typeof CategoryFilterSelect>;

const Template = () => {
  const [isOpenCategory, setIsOpenCategory] = useState<number>(0);
  const [selectedCategory, setIsSelectedCategory] = useState<string>('');

  const [locationId, setLocationId] = useState<string>('');
  const [receivedCities, setReceivedCities] = useState<ILocation[]>([]);
  const [receivedRegions, setReceivedRegions] = useState<ILocation[]>([]);

  const disabledSelects = ['size(clothes)', 'size(shoes)'];

  const getRegions = async () => {
    return regions;
  };

  const getCities = async (id: string) => {
    if (id) {
      return cities;
    }
    return [];
  };

  useEffect(() => {
    (async () => {
      try {
        const responseRegions = await getRegions();
        const responseCities = await getCities(locationId);

        if (receivedRegions.length === 0) {
          setReceivedRegions(responseRegions);
        }

        setReceivedCities(responseCities);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [locationId]);

  // console.log('!receivedRegions', !receivedRegions);
  // console.log('responseCities', receivedCities);

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
            title={category.title}
            cities={receivedCities}
            regions={receivedRegions}
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
