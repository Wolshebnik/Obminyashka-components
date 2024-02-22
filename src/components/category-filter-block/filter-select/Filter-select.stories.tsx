// import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { filterData } from './mock';
import { FilterSelect } from './index';

const meta = {
  title: 'FilterSelect',
  component: FilterSelect,
} satisfies Meta<typeof FilterSelect>;

export default meta;
type Story = StoryObj<typeof FilterSelect>;

const Template = () => {
  // const [isOpen, setIsOpen] = useState<number>(0);

  return (
    <div style={{ width: '250px' }}>
      {filterData.map((category: any) => (
        <FilterSelect
          id={category.id}
          type={category.type}
          // setOpen={setIsOpen}
          title={category.title}
          options={category.options}
          // isOpen={isOpen === category.id}
        />
      ))}
    </div>
  );
};

export const SelectFilter: Story = {
  render: () => <Template />,
};
