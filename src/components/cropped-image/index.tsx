import { useState, useEffect, ChangeEvent } from 'react';
import imageCompression from 'browser-image-compression';

import { Crop } from '../crop';
import * as Icon from '../icon';
import { Modal } from '../modal';
import { Avatar } from '../avatar';

import * as Styles from './styles';
import { IConvertToMB, ICroppedImage } from './types';
import { convertToMB, isRightExtension, options } from './helpers';

const CroppedImage = ({
  onSave,
  onDelete,
  cropTitle,
  errorSize,
  errorTitle,
  avatarImage,
  errorFormat,
  saveBtnText,
  closeBtnText,
  deleteBtnText,
  rotateBtnText,
  errorSizeSelect,
}: ICroppedImage) => {
  const [image, setImage] = useState(avatarImage);
  const [error, setError] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [showIcon, setShowIcon] = useState(false);
  const [openCrop, setOpenCrop] = useState(false);
  const [croppedImage, setCroppedImage] = useState('');
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  useEffect(() => {
    if (avatarImage) {
      setImage(`${avatarImage}`);
    }
  }, [avatarImage]);

  const handleOpenCrop = () => {
    if (image) {
      setCroppedImage(image);
      setOpenCrop(true);
    }
  };

  const changeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;

    const file: File = event.target.files[0];

    const { value, valueString }: IConvertToMB = convertToMB(file.size);

    if (!value) return;

    if (value >= 10 && valueString.includes('MB')) {
      setError('size');
      setFileSize(valueString);
      event.target.value = '';
      return;
    }

    if (!isRightExtension(file?.type)) {
      setError('file_type');
      event.target.value = '';
      return;
    }

    const compressedFile: File = await imageCompression(file, options);

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(compressedFile);
    reader.onload = async ({ target }) => {
      if (target && target.readyState === 2) {
        setCroppedImage(target.result as string);
        setOpenCrop(true);
      }
    };
  };

  const onCropDelete = async () => {
    setIsDeleteLoading(true);

    try {
      await onDelete();

      setImage('');
      setCroppedImage('');
      setOpenCrop(false);
    } catch (err) {
      return await Promise.reject(err);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const onCropSave = async ({ file }: { file: File }) => {
    setIsSaveLoading(true);

    try {
      await onSave(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async ({ target }) => {
        if (target?.readyState === 2) {
          setImage(target.result as string);
          setCroppedImage(target.result as string);
          setOpenCrop(false);
        }
      };
    } catch (err) {
      return await Promise.reject(err);
    } finally {
      setIsSaveLoading(false);
    }
  };

  return (
    <>
      <Styles.WrapAvatar
        hasImage={!!image}
        showIcon={showIcon}
        onClick={handleOpenCrop}
        onMouseEnter={() => setShowIcon(true)}
        onMouseLeave={() => setShowIcon(false)}
      >
        <Avatar width={135} height={135} source={image} />

        {showIcon && (
          <Styles.WrapCropSvg>
            <Icon.Camera />
          </Styles.WrapCropSvg>
        )}

        {!openCrop && !image && (
          <Styles.InputFile
            type="file"
            name="file"
            onChange={changeFile}
            accept=".png, .jpg, .jpeg, .gif"
          />
        )}
      </Styles.WrapAvatar>
      {openCrop && (
        <Modal
          isOpen={openCrop}
          hideButtonClose
          onClose={() => setOpenCrop(false)}
        >
          <Crop
            disabled={!image}
            image={croppedImage}
            cropTitle={cropTitle}
            saveBtnText={saveBtnText}
            closeBtnText={closeBtnText}
            isSaveLoading={isSaveLoading}
            deleteBtnText={deleteBtnText}
            rotateBtnText={rotateBtnText}
            onDelete={() => onCropDelete()}
            isDeleteLoading={isDeleteLoading}
            onClose={() => setOpenCrop(false)}
            onSave={(e: { file: File }) => onCropSave(e)}
          />
        </Modal>
      )}
      {error !== '' && (
        <Modal isOpen={!!error} onClose={() => setError('')}>
          <Styles.ErrorWrapper>
            <h2>{errorTitle}</h2>
            <div>
              {error === 'size' && (
                <p>
                  {errorSize} {fileSize}{' '}
                </p>
              )}
              <p>{error === 'size' ? errorSizeSelect : errorFormat}</p>
              {error === 'file_type' && <p>{`(jpg, jpeg, png, gif).`}</p>}
            </div>
          </Styles.ErrorWrapper>
        </Modal>
      )}
    </>
  );
};
export { CroppedImage };
