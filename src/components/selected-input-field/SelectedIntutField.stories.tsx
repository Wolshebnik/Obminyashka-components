import { Formik, Form, FormikValues } from 'formik';
import type { Meta, StoryObj } from '@storybook/react';

import SelectedInputField from '.';
import { ButtonNew } from 'components/button-new';

const meta = {
  title: 'SelectedInputField',
  component: SelectedInputField,
} satisfies Meta<typeof SelectedInputField>;

export default meta;
type Story = StoryObj<typeof SelectedInputField>;

export const SelectedInput: Story = {
  args: {
    name: 'region',
  },
  render: (args) => {
    const onSubmit = (values: FormikValues) => {
      alert(JSON.stringify(values));
    };

    return (
      <Formik initialValues={{ region: '' }} onSubmit={onSubmit}>
        <Form>
          <SelectedInputField {...args} />

          <div style={{ width: '300px', marginTop: '10px' }}>
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
  },
};
