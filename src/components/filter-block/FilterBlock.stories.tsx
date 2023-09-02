/* eslint-disable no-console */
//TODO Typescript types
import { Formik, Form, FormikValues } from 'formik';
import type { Meta, StoryObj } from '@storybook/react';

import { FilterBlock } from '.';
import { initialValues } from './config';
import { ButtonNew } from 'components/button-new';
import { categoryData, cities, filterData } from './mock';

const meta = {
  title: 'FilterBlock',
  component: FilterBlock,
} satisfies Meta<typeof FilterBlock>;

export default meta;
type Story = StoryObj<typeof FilterBlock>;

const getCities = async (id: string) => {
  alert(`пошел запрос с id ${id}`);
  await setTimeout(() => {
    alert(`ответ по id ${id}`);
  }, 300);

  return cities;
};

const onSubmit = (values: FormikValues) => {
  const sendData = {
    ...values,
    region: values.region.id,
    city: values.city.id,
  };
  alert(JSON.stringify(sendData));
  console.log(sendData);
};

const Template = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <FilterBlock title={'Categories'} categoryFilterData={categoryData} />
        <div style={{ margin: '10px' }}></div>
        <FilterBlock
          title={'Filter'}
          getCities={getCities}
          categoryFilterData={filterData}
        />

        <div style={{ margin: '10px 0', width: '334px' }}>
          <ButtonNew colorType={'blue'} styleType={'default'} text="submit" />
        </div>
      </Form>
    </Formik>
  );
};

export const Filter: Story = {
  render: () => <Template />,
};
