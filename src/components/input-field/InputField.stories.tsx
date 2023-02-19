import { Formik, Form } from 'formik';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputField } from './index';
import { initialValues, validationSchema } from './config';

export default {
  title: 'InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, touched }) => {
        console.log(touched);
        console.log(values);
        return (
          <Form style={{ display: 'flex', gap: 30, flexDirection: 'column' }}>
            <InputField
              placeholder="text"
              label="Enter your login"
              {...args}
              name="text"
            />

            <InputField
              type="password"
              placeholder="password"
              label="Enter your password"
              {...args}
              name="password"
            />

            <InputField
              type="tel"
              inputMaxWidth="588px"
              label="Enter your phone"
              inputFlexDirection="row"
              wrapperInputErrorWidth="415px"
              placeholder="+38(999) 999-99-99"
              inputJustifyContent="space-between"
              {...args}
              name="tel"
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export const Fields = Template.bind({});
