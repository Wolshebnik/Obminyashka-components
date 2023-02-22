import { Formik, Form, FormikValues } from 'formik';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputField } from '.';
import { Button } from '../button';
import { initialValues, validationSchema } from './config';

export default {
  title: 'InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => {
  const onSubmit = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => {
        return (
          <Form style={{ display: 'flex', gap: 30, flexDirection: 'column' }}>
            <InputField
              {...args}
              name="text"
              placeholder="text"
              label="Enter your login"
            />

            <InputField
              {...args}
              name="password"
              type="password"
              placeholder="password"
              label="Enter your password"
            />

            <InputField
              {...args}
              name="tel"
              type="tel"
              inputMaxWidth="588px"
              label="Enter your phone"
              inputFlexDirection="row"
              wrapperInputErrorWidth="415px"
              placeholder="+38(999) 999-99-99"
              inputJustifyContent="space-between"
            />

            <Button type="submit" text="Submit" />
          </Form>
        );
      }}
    </Formik>
  );
};

export const Fields = Template.bind({});
