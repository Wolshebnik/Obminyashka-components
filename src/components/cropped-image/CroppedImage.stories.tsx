import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CroppedImage } from './index';
import { IOnDelete, IOnSave } from './types';
export default {
  title: 'CroppedImage',
  component: CroppedImage,
} as ComponentMeta<typeof CroppedImage>;
export const Template: ComponentStory<typeof CroppedImage> = (args) => {
  const [avatarImage, setAvatarImage] = useState('');

  const error = {
    errorTitle: ' Помилка',
    errorSize: 'Розмір вашого фото',
    errorSizeSelect: 'Виберіть фото обсягом до 10 МБ.',
    errorFormat: 'Будь ласка, виберіть фото відповідно до вказаних форматів',
  };
  const onSave = async ({
    file,
    setImage,
    setOpenCrop,
    setCroppedImage,
    setIsSaveLoading,
  }: IOnSave) => {
    setIsSaveLoading(true);
    // eslint-disable-next-line no-console
    console.log(file);

    const reader = new FileReader();
    reader.onload = function () {
      const base64String = (reader.result as string).split(',')[1];
      setImage(base64String);
      setAvatarImage(base64String);
      setCroppedImage(base64String);
    };
    reader.readAsDataURL(file);

    setOpenCrop(false);
    setIsSaveLoading(false);
  };
  const onDelete = ({
    handleClear,
    setOpenCrop,
    setIsDeleteLoading,
  }: IOnDelete) => {
    setIsDeleteLoading(true);
    setAvatarImage('');
    handleClear();
    setOpenCrop(false);
    setTimeout(() => setIsDeleteLoading(false), 500);
  };
  return (
    <>
      <CroppedImage
        {...args}
        avatarImage={avatarImage}
        onSave={({
          file,
          setImage,
          setOpenCrop,
          setCroppedImage,
          setIsSaveLoading,
        }: IOnSave) =>
          onSave({
            file,
            setImage,
            setOpenCrop,
            setCroppedImage,
            setIsSaveLoading,
          })
        }
        onDelete={({
          handleClear,
          setOpenCrop,
          setIsDeleteLoading,
        }: IOnDelete) =>
          onDelete({
            handleClear,
            setOpenCrop,
            setIsDeleteLoading,
          })
        }
        {...error}
      />
    </>
  );
};
