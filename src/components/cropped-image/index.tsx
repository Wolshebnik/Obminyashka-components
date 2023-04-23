import { useState, useEffect, ChangeEvent } from 'react';
import imageCompression from 'browser-image-compression';

import { Crop } from './crop';
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
  isSaveLoading,
  isDeleteLoading,
}: ICroppedImage) => {
  const [error, setError] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [image, setImage] = useState(avatarImage);
  const [showIcon, setShowIcon] = useState(false);
  const [openCrop, setOpenCrop] = useState(false);
  const [croppedImage, setCroppedImage] = useState('');

  useEffect(() => {
    if (avatarImage && !avatarImage?.includes('data:image/jpeg;base64,'))
      setImage(`data:image/jpeg;base64,${avatarImage}`);
    if (avatarImage && avatarImage?.includes('data:image/jpeg;base64,'))
      setImage(`${avatarImage}`);
  }, [avatarImage]);
  const handleOpenCrop = () => {
    if (image) {
      setCroppedImage(image);
      setOpenCrop(true);
    }
  };
  const handleClear = () => {
    setImage('');
    setCroppedImage('');
  };
  const handleSetImage = (img: string) => {
    setImage(img);
    setCroppedImage(img);
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

        {image !== '' && (
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

      <Modal
        hideButtonClose
        withoutBg={true}
        isOpen={openCrop}
        onClose={setOpenCrop}
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
          onDelete={() =>
            onDelete({
              handleClear,
              setOpenCrop,
              // setIsDeleteLoading,
            })
          }
          isDeleteLoading={isDeleteLoading}
          onClose={() => setOpenCrop(false)}
          onSave={({ file }: { file: File }) =>
            onSave({
              file,
              setOpenCrop,
              handleSetImage,
              // setIsSaveLoading,
            })
          }
        />
      </Modal>

      <Modal isOpen={!!error} onClose={() => setError('')} withoutBg={true}>
        <Styles.ErrorWrapper>
          <h2>{errorTitle}</h2>
          <div>
            {error === 'size' && (
              <p>
                {errorSize} {fileSize}
              </p>
            )}
            <p>{error === 'size' ? errorSizeSelect : errorFormat}</p>
            {error === 'file_type' && <p>{`(jpg, jpeg, png, gif).`}</p>}
          </div>
        </Styles.ErrorWrapper>
      </Modal>
    </>
  );
};

export { CroppedImage };
