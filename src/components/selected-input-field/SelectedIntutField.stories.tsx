//TODO Typescript types
import { Formik, Form, FormikValues } from 'formik';
import type { Meta, StoryObj } from '@storybook/react';

import SelectedInputField from '.';
// import { cities } from './mock';

const meta = {
  title: 'SelectedInputField',
  component: SelectedInputField,
} satisfies Meta<typeof SelectedInputField>;

export default meta;
type Story = StoryObj<typeof SelectedInputField>;

const onSubmit = (values: FormikValues) => {
  alert(JSON.stringify(values));
};

const Template = () => {
  return (
    <Formik initialValues={[]} onSubmit={onSubmit}>
      <Form>
        <SelectedInputField />
      </Form>
    </Formik>
  );
};

export const SelectedInput: Story = {
  render: () => <Template />,
};
