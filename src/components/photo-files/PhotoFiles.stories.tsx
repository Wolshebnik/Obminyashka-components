import { Form, Formik, FormikValues } from 'formik';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PhotoFiles } from '.';
import { Button } from '../button';
import { initialValues, validationSchema } from './config';

export default {
  title: 'PhotoFiles',
  component: PhotoFiles,
} as ComponentMeta<typeof PhotoFiles>;

const Template: ComponentStory<typeof PhotoFiles> = (args) => {
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
      <Form>
        <PhotoFiles {...args} />
        <Button type="submit" text="Submit" />
      </Form>
    </Formik>
  );
};
export const PhotoFilesDefault = Template.bind({});
PhotoFilesDefault.args = {
  name: 'images',
  preposition: 'з',
  photosUploaded: 'Завантажено фотографій',
  description: 'Завантажте фотографії ваших речей',
  firstUploadText: 'Перше фото стане обкладинкою картки товару',
};
