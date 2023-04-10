import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop/types';

import { ICrop } from './types';
import * as Icon from '../icon';
import * as Styles from './style';
import { Button } from '../button';
import getCroppedImg from './helpers';

const Crop = ({
  image,
  onSave,
  onClose,
  onDelete,
  disabled,
  cropTitle,
  saveBtnText,
  closeBtnText,
  deleteBtnText,
  rotateBtnText,
  isSaveLoading,
  isDeleteLoading,
}: ICrop) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_: Area, croppedPixels: any) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    const croppedPicture = await getCroppedImg(
      image,
      croppedAreaPixels,
      rotation
    );

    if (typeof croppedPicture?.src === 'string') {
      const file = new File([croppedPicture.blob], 'avatar', {
        type: croppedPicture.blob.type,
      });
      onSave({ file });
    }
  }, [image, croppedAreaPixels, rotation]);

  return (
    <Styles.Wrap>
      <Styles.Title>{cropTitle || 'Added photo'}</Styles.Title>

      <Styles.BlockCrop>
        <Cropper
          aspect={1}
          crop={crop}
          zoom={zoom}
          image={image}
          showGrid={false}
          cropShape="round"
          rotation={rotation}
          onZoomChange={setZoom}
          onCropChange={setCrop}
          objectFit="vertical-cover"
          onCropComplete={onCropComplete}
        />
      </Styles.BlockCrop>

      <Styles.RotationBlock onClick={() => setRotation((prev) => prev + 45)}>
        <Icon.Rotate />
        <Styles.Text>{rotateBtnText || 'Rotate'}</Styles.Text>
      </Styles.RotationBlock>

      <Styles.BlockButtons>
        {!disabled && (
          <Button
            onClick={() => onDelete()}
            text={deleteBtnText || 'Delete'}
            style={{ width: '100%' }}
            isLoading={isDeleteLoading}
          />
        )}

        <Button onClick={() => onClose()} text={closeBtnText || 'Close'} />

        <Button
          isLoading={isSaveLoading}
          onClick={showCroppedImage}
          text={saveBtnText || 'Save'}
        />
      </Styles.BlockButtons>
    </Styles.Wrap>
  );
};

export { Crop };
