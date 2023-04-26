import { useState } from 'react';
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
  const [images, setImages] = useState<File[]>([]);
  const onSubmit = (values: FormikValues) => {
    // eslint-disable-next-line no-console
    console.log({ values, images });
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form>
        <PhotoFiles {...args} setImages={setImages} />
        <Button type="submit" text="Submit" />
      </Form>
    </Formik>
  );
};

export const PhotoFilesDefault = Template.bind({});
PhotoFilesDefault.args = {
  name: 'images',
  preposition: 'з',
  maxSizeMB: 8,
  maxCount: 8,
  photosUploaded: 'Завантажено фотографій',
  description: 'Завантажте фотографії ваших речей',
  firstUploadText: 'Перше фото стане обкладинкою картки товару',
  errorTitle: 'Помилка',
  errorAddFile: 'Щойно додане фото вже існує в списку обраних',
  errorExtension: 'Будь ласка, виберіть фото відповідно до вказаних форматів',
  errorSize: 'Розмір вашого фото',
  errorRightSize: 'Виберіть фото обсягом до 10 МБ.',
  errorNoSaveMore: 'Ви не можете мати більше ніж 10 збережених фото.',
};