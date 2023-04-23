import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CroppedImage } from './index';
import { IOnDelete, IOnSave } from './types';

// eslint-disable-next-line no-console
const prom = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
  });
export default {
  title: 'CroppedImage',
  component: CroppedImage,
} as ComponentMeta<typeof CroppedImage>;
export const Template: ComponentStory<typeof CroppedImage> = (args) => {
  const [avatarImage, setAvatarImage] = useState('');
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const error = {
    errorTitle: ' Помилка',
    errorSize: 'Розмір вашого фото',
    errorSizeSelect: 'Виберіть фото обсягом до 10 МБ.',
    errorFormat: 'Будь ласка, виберіть фото відповідно до вказаних форматів',
  };
  const onSave = async ({ file, setOpenCrop, handleSetImage }: IOnSave) => {
    try {
      setIsSaveLoading(true);
      await prom();
      const reader = new FileReader();
      reader.onload = function () {
        const base64String = (reader.result as string).split(',')[1];
        setAvatarImage(base64String);
        handleSetImage(base64String);
        setOpenCrop(false);
      };
      reader.readAsDataURL(file);
    } catch (er) {
    } finally {
      setIsSaveLoading(false);
    }
  };
  const onDelete = async ({ handleClear, setOpenCrop }: IOnDelete) => {
    try {
      setIsDeleteLoading(true);
      await prom();
      setAvatarImage('');
      handleClear();
      setOpenCrop(false);
    } catch (err) {
    } finally {
      setIsDeleteLoading(false);
    }
  };
  return (
    <>
      <CroppedImage
        {...args}
        avatarImage={avatarImage}
        isSaveLoading={isSaveLoading}
        isDeleteLoading={isDeleteLoading}
        onSave={({ file, setOpenCrop, handleSetImage }: IOnSave) =>
          onSave({
            file,
            setOpenCrop,
            handleSetImage,
          })
        }
        onDelete={({ handleClear, setOpenCrop }: IOnDelete) =>
          onDelete({
            handleClear,
            setOpenCrop,
          })
        }
        {...error}
      />
    </>
  );
};
