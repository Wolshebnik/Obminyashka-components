import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { categoryData } from './mock';
import { CategorySelect } from './index';

const meta = {
  title: 'CategorySelect',
  component: CategorySelect,
} satisfies Meta<typeof CategorySelect>;

export default meta;
type Story = StoryObj<typeof CategorySelect>;

const Template = () => {
  const [isOpen, setIsOpen] = useState<number>(0);

  return (
    <div style={{ width: '250px' }}>
      {categoryData.map((category: any) => (
        <CategorySelect
          id={category.id}
          setOpen={setIsOpen}
          title={category.title}
          options={category.options}
          isOpen={isOpen === category.id}
        />
      ))}
    </div>
  );
};

export const SelectCategory: Story = {
  render: () => <Template />,
};
