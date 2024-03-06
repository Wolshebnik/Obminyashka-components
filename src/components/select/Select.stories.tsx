/* eslint-disable no-console */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './index';
import * as Styles from './styles';
import { IOnChangeValue } from './type';
import { categoryData, cities, filterData, regions } from './mock';

const meta = {
  title: 'Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const Template = () => {
  const [open, setOpen] = useState<number>(-1);
  const [isOpenLocation, setIsOpenLocation] = useState<boolean>(false);
  const [data, setData] = useState<IOnChangeValue[] | []>([]);

  const setOpenCategory = (id: number) => {
    if (open === id) {
      setOpen(-1);
      return;
    }

    setOpen(id);
  };

  const onChange = (setValues: IOnChangeValue) => {
    if (!data.length) {
      setData([setValues]);
      return;
    }

    data.map((obj) => {
      if (obj.value !== setValues.value) {
        setData([...data, setValues]);
      }

      if (obj.value === setValues.value) {
        if (!setValues.chosenOptions.length) {
          setData([...data.filter((el) => el.value !== setValues.value)]);
          return;
        }

        setData([
          ...data.filter((el) => el.value !== setValues.value),
          setValues,
        ]);
      }
    });
  };

  console.log('DATA', data);

  return (
    <div style={{ width: '300px' }}>
      <div>
        <h1>Categories</h1>

        {categoryData.map((el, index) => {
          return (
            <Select
              {...el}
              disabled={false}
              multiple={el.multiple}
              key={'category' + index}
              isActive={open === index}
              setIsActive={() => setOpenCategory(index)}
              onChange={onChange}
            />
          );
        })}
      </div>

      <div>
        <h1>Filter</h1>

        <Styles.TitleContainer>
          <Styles.Title
            readOnly
            value={'location'}
            onClick={() => setIsOpenLocation(!isOpenLocation)}
          />

          <Styles.Triangle isOpen={isOpenLocation} />
        </Styles.TitleContainer>

        <Styles.ScrollWrapper>
          <Styles.SubCategories filtration isOpen={isOpenLocation}>
            <Styles.SubCategory filtration>
              <Select
                value="99"
                filtration
                title="region"
                options={regions}
                onChange={(values) => console.log(values)}
              />
            </Styles.SubCategory>

            <Styles.SubCategory filtration>
              <Select
                value="100"
                filtration
                title="city"
                options={cities}
                onChange={(values) => console.log(values)}
              />
            </Styles.SubCategory>
          </Styles.SubCategories>
        </Styles.ScrollWrapper>

        {filterData.map((el, index) => {
          return (
            <Select
              {...el}
              key={'filter' + index}
              multiple={el.multiple}
              filtration={el.filtration}
              saveOnClose={el.saveOnClose}
              onChange={onChange}
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
