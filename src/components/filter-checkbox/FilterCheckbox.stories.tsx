import type { Meta, StoryObj } from '@storybook/react';

import { FilterCheckbox } from '.';
import { ButtonNew } from 'components/button-new';
import { Form, Formik, FormikValues } from 'formik';

import { checkboxes, initialValues } from './config';

const meta: Meta = {
  title: 'FilterCheckbox',
  component: FilterCheckbox,
} satisfies Meta<typeof FilterCheckbox>;

export default meta;
type Story = StoryObj<typeof FilterCheckbox>;

const Template = () => {
  const onSubmit = (values: FormikValues) => {
    alert(JSON.stringify(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form style={{ height: '90px', width: '200px' }}>
        {checkboxes.map((item) => (
          <div style={{ marginBottom: '10px' }}>
            <FilterCheckbox {...item} key={item.label} />
          </div>
        ))}

        <div style={{ width: '200px' }}>
          <ButtonNew
            text="SUBMIT"
            type="submit"
            colorType="blue"
            styleType="default"
          ></ButtonNew>
        </div>
      </Form>
    </Formik>
  );
};

export const Checkbox: Story = {
  render: () => <Template />,
};
