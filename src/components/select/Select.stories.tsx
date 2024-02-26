/* eslint-disable no-console */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { categoryData } from './mock';
import { filterData } from './mock';
// import * as Styles from './styles';
import { Select } from './index';

const meta = {
  title: 'Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const Template = () => {
  const [open, setOpen] = useState<number>(-1);

  const setOpenCategory = (id: number) => {
    if (open === id) {
      setOpen(-1);
      return;
    }

    setOpen(id);
  };

  return (
    <div style={{ width: '300px' }}>
      <div>
        <h1>Categories</h1>

        {categoryData.map((el, index) => {
          return (
            <Select
              {...el}
              disabled={false}
              onChange={() => null}
              multiple={el.multiple}
              key={'category' + index}
              isActive={open === index}
              setIsActive={() => setOpenCategory(index)}
            />
          );
        })}
      </div>

      <div>
        <h1>Filter</h1>

        {filterData.map((el, index) => {
          return (
            <Select
              {...el}
              onChange={() => null}
              key={'filter' + index}
              multiple={el.multiple}
              filtration={el.filtration}
              saveOnClose={el.saveOnClose}
              disabled={
                el.disabled === undefined ? undefined : !(open === el.disabled)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export const SelectCategory: Story = {
  render: () => <Template />,
};
