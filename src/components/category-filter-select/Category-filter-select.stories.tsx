import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MockData } from './types';
import * as Styles from './styles';
import { CategoryFilterSelect } from './index';
import { categoryData, filterData } from './mock';

const meta = {
  title: 'CategoryFilterSelect',
  component: CategoryFilterSelect,
} satisfies Meta<typeof CategoryFilterSelect>;

export default meta;
type Story = StoryObj<typeof CategoryFilterSelect>;

const Template = () => {
  const [isOpenCategory, setIsOpenCategory] = useState<number>(0);
  const [selectedCategory, setIsSelectedCategory] = useState<string>('');

  const disabledSelects = ['size(clothes)', 'size(shoes)'];

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
            options={category.options}
            disabled={disabledSelects}
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
