/* eslint-disable no-console */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { select } from './mock';
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
        <h1>Category</h1>

        <Select
          // multiple
          // isLoading
          {...select}
          filtration
          // notCheckbox
          saveOnClose
          isActive={open === 0}
          setIsActive={() => setOpenCategory(0)}
          onChange={(values) => console.log(values)}
        />
      </div>

      <div>
        <h1>Filter</h1>

        <Select
          multiple
          {...select}
          // disabled={!(open === 0)}
          onChange={(values) => console.log(values)}
        />
        <Select {...select} onChange={(values) => console.log(values)} />
      </div>
    </div>
  );
};

export const SelectCategory: Story = {
  render: () => <Template />,
};
