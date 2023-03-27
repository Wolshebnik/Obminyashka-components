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
    // eslint-disable-next-line no-console
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
              placeholder="+38(999) 999-99-99"
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
};

export const Fields = Template.bind({});
