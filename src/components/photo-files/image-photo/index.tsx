import { MouseEvent, useState } from 'react';

import { IImagePhoto } from './types';
import { ImgPhoto, WrapImage, SpanClose } from './styles';

const ImagePhoto = ({
  url,
  alt,
  index,
  onDrop,
  onDragEnd,
  onDragOver,
  removeImage,
  onDragStart,
  onDragLeave,
}: IImagePhoto) => {
  const [isRemove, setIsRemove] = useState<boolean>(false);

  const delayRemove = (event: MouseEvent<HTMLSpanElement>, idx: number) => {
    setIsRemove(true);
    const timeoutForDelete = setTimeout(() => {
      setIsRemove(false);
      removeImage(event, idx);
      clearTimeout(timeoutForDelete);
    }, 300);
  };

  return (
    <WrapImage
      draggable
      onDrop={onDrop}
      isRemove={isRemove}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      onDragLeave={onDragLeave}
    >
      <ImgPhoto src={url} alt={alt} />
      <SpanClose onClick={(event) => delayRemove(event, index)} />
    </WrapImage>
  );
};

export { ImagePhoto };
