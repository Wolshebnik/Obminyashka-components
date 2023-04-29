import { useState } from 'react';
import { Form, Formik, FormikValues } from 'formik';
import type { Meta, StoryObj } from '@storybook/react';

import { PhotoFiles } from '.';
import { Button } from '../button';
import { initialValues, validationSchema } from './config';

const meta = {
  title: 'PhotoFiles',
  component: PhotoFiles,
} satisfies Meta<typeof PhotoFiles>;

export default meta;
type Story = StoryObj<typeof PhotoFiles>;

export const PhotoFilesDefault: Story = {
  args: {
    maxCount: 8,
    maxSizeMB: 8,
    name: 'images',
    preposition: 'з',
    errorTitle: 'Помилка',
    errorSize: 'Розмір вашого фото',
    photosUploaded: 'Завантажено фотографій',
    description: 'Завантажте фотографії ваших речей',
    errorRightSize: 'Виберіть фото обсягом до 10 МБ.',
    errorAddFile: 'Щойно додане фото вже існує в списку обраних',
    firstUploadText: 'Перше фото стане обкладинкою картки товару',
    errorNoSaveMore: 'Ви не можете мати більше ніж 10 збережених фото.',
    errorExtension: 'Будь ласка, виберіть фото відповідно до вказаних форматів',
  },
  render: (args) => {
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
  },
};
