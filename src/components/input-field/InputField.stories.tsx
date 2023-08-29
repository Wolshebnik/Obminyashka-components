import { Formik, Form, FormikValues } from 'formik';
import type { Meta, StoryObj } from '@storybook/react';

import { InputField } from '.';
import { Button } from '../button';
import { initialValues, validationSchema } from './config';

const meta = {
  title: 'InputField',
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof InputField>;

export const Fields: Story = {
  render: () => {
    const onSubmit = (values: FormikValues) => {
      alert(values);
    };

    return (
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(args) => {
          return (
            <Form style={{ display: 'flex', gap: 30, flexDirection: 'column' }}>
              <InputField
                {...args}
                name="text"
                inputGap="6px"
                placeholder="text"
                label="Enter your login"
              />

              <InputField
                {...args}
                inputGap="6px"
                name="password"
                type="password"
                placeholder="password"
                label="Enter your password"
              />

              <InputField
                {...args}
                name="tel"
                type="tel"
                inputGap="6px"
                inputMaxWidth="588px"
                label="Enter your phone"
                inputFlexDirection="row"
                wrapperInputErrorWidth="415px"
                placeholder="+380(99)999-99-99"
                inputJustifyContent="space-between"
              />

              <InputField
                {...args}
                name="textarea"
                type="textarea"
                inputGap="26px"
                label="Опишіть Вашу річ: деффекти, особливості використання, тощо"
              />

              <Button type="submit" text="Submit" />
            </Form>
          );
        }}
      </Formik>
    );
  },
};
