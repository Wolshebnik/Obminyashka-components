//TODO Typescript types
import { Formik, Form, FormikValues } from 'formik';
import type { Meta, StoryObj } from '@storybook/react';

import { FilterBlock } from '.';
import { categoryData } from './mock';
import { initialValues } from './config';

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
        <FilterBlock data={categoryData} />
      </Form>
    </Formik>
  );
};

export const BlockCategory: Story = {
  render: () => <Template />,
};
