import type { Meta, StoryObj } from '@storybook/react';

import { FormikCheckbox } from './index';
import { ButtonNew } from 'components/button-new';
import { Form, Formik, FormikValues } from 'formik';

const meta: Meta = {
  title: 'FormikCheckbox',
  component: FormikCheckbox,
} satisfies Meta<typeof FormikCheckbox>;

export default meta;
type Story = StoryObj<typeof FormikCheckbox>;

const Template = (args: any) => {
  interface FormValues {
    name: string[];
  }
  const initialValues: FormValues = {
    name: [],
  };

  const handleSubmit = (values: FormikValues) => {
    alert(JSON.stringify(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form style={{ height: '90px' }}>
          <FormikCheckbox
            values={values.name}
            style={{ marginBottom: '10px' }}
            {...args}
          />

          <div style={{ width: '200px' }}>
            <ButtonNew
              text="SUBMIT"
              type="submit"
              colorType="blue"
              styleType="default"
            ></ButtonNew>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export const Checkbox: Story = {
  args: {
    value: [],
    name: 'name',
    type: 'checkbox',
    label: 'Checkbox',
  },
  render: (args) => <Template {...args} />,
};

export const Radio: Story = {
  args: {
    value: [],
    name: 'name',
    type: 'radio',
    label: 'Radio',
  },
  render: (args) => <Template {...args} />,
};
