/* eslint-disable no-console */
//TODO Typescript types
import { Formik, Form, FormikValues } from 'formik';
import type { Meta, StoryObj } from '@storybook/react';

import { FilterBlock } from '.';
import { categoryData, filterData } from './mock';
import { initialValues } from './config';
import { ButtonNew } from 'components/button-new';

const meta = {
  title: 'FilterBlock',
  component: FilterBlock,
} satisfies Meta<typeof FilterBlock>;

export default meta;
type Story = StoryObj<typeof FilterBlock>;

const onSubmit = (values: FormikValues) => {
  alert(JSON.stringify(values));
};

const Template = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <FilterBlock title={'Categories'} categoryFilterData={categoryData} />
        <div style={{ margin: '10px' }}></div>
        <FilterBlock title={'Filter'} categoryFilterData={filterData} />

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
