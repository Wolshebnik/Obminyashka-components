import { useState, MouseEvent } from 'react';
import { Field, FieldProps } from 'formik';

import {
  DivDragEventType,
  LabelDragEventType,
  InputChangeEventType,
} from 'types';
import { isRightExtension } from 'utils';

import { Modal } from '../modal';
import * as Styles from './styles';
import { IPhotoFiles } from './types';
import { InputFile } from '../input-file';
import { ImagePhoto } from './image-photo';
import {
  checkFileSize,
  fileComparison,
  changeStateForImagesWhenDrop,
} from './helpers';

const PhotoFiles = ({
  name,
  preposition,
  description,
  maxSizeMB = 10,
  photosUploaded,
  firstUploadText,
  ...props
}: IPhotoFiles) => {
  const [isOpen, onClose] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [blobFiles, setBlobFiles] = useState<File[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [sizeFile, setSizeFile] = useState<string>('');
  const [isExistingFiles, setIsExistingFiles] = useState<boolean>(false);
  const [isModeThen, setIsModeThen] = useState<boolean>(false);
  const [isWrongExtension, setIsWrongExtension] = useState<boolean>(false);

  const removeImage = (event: MouseEvent<HTMLSpanElement>, index: number) => {
    event.preventDefault();
    const newImageFiles = [...blobFiles];
    const newPreViewImage = [...images];
    newPreViewImage.splice(index, 1);
    newImageFiles.splice(index, 1);
    setBlobFiles(newImageFiles);
    setImages(newPreViewImage);
  };

  const dragStartHandler = (_: DivDragEventType, index: number) => {
    setCurrentIndex(index);
  };

  const dragEndHandler = (e: DivDragEventType) => {
    (e.target as HTMLDivElement).style.background = 'white';
  };

  const dragOverHandler = (e: DivDragEventType) => {
    e.preventDefault();
    (e.target as HTMLDivElement).style.background = 'lightgrey';
  };

  const dropHandler = (e: DivDragEventType, index: number) => {
    e.preventDefault();
    (e.target as HTMLDivElement).style.background = 'white';

    changeStateForImagesWhenDrop({
      currentIndex,
      index,
      processedArray: images,
      setProcessedArray: setImages,
    });

    changeStateForImagesWhenDrop({
      index,
      processedArray: blobFiles,
      currentIndex,
      setProcessedArray: setBlobFiles,
    });
  };

  return (
    <Field name={name}>
      {({ meta, form, field: { value, ...fieldProps } }: FieldProps) => {
        const error = meta.touched && meta.error ? meta.error : undefined;

        const change = async (
          e: InputChangeEventType | LabelDragEventType,
          dropFiles?: File[]
        ) => {
          let files: File[] = [];
          const allFiles = form.values[name];
          setSizeFile('');
          setIsExistingFiles(false);
          setIsModeThen(false);
          setIsWrongExtension(false);

          if (e.target instanceof HTMLInputElement && e.target.files) {
            files = Array.from(e.target.files);
          }

          if (dropFiles) {
            files = Array.from(dropFiles);
          }

          if (e.target instanceof HTMLInputElement && e.target.value) {
            e.target.value = '';
          }

          const { sizeString, isWrongSize } = checkFileSize(files, maxSizeMB);
          if (isWrongSize) {
            setSizeFile(sizeString);
            onClose(true);
            return;
          }

          if (files.some((file) => !isRightExtension(file.type))) {
            setIsWrongExtension(true);
            onClose(true);
            return;
          }

          if (!fileComparison(allFiles, files)) {
            setIsExistingFiles(true);
            onClose(true);
            return;
          }

          if (10 - allFiles.length - files.length < 0) {
            setIsModeThen(true);
            onClose(true);
            return;
          }

          form.setFieldTouched(name);
          form.setFieldValue(name, [...allFiles, ...files]);
        };

        return (
          <Styles.WrapFiles>
            <Styles.FileTittle>
              {description}&nbsp;
              <Styles.Star>*</Styles.Star>
            </Styles.FileTittle>

            <p>{firstUploadText}</p>

            <Styles.FileDescription>
              {`${photosUploaded} ${form.values[name].length} ${preposition} 10`}
            </Styles.FileDescription>

            <Styles.WrapperFile>
              {form.values[name].map((file: any, index: number) => (
                <ImagePhoto
                  index={index}
                  alt={file.name}
                  key={String(`${index}`)}
                  removeImage={removeImage}
                  url={URL.createObjectURL(file)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDrop={(e) => dropHandler(e, index)}
                  onDragLeave={(e) => dragEndHandler(e)}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragStart={(e) => dragStartHandler(e, index)}
                />
              ))}

              {form.values[name].length < 10 && (
                <InputFile
                  {...props}
                  {...fieldProps}
                  name={name}
                  error={error}
                  onChange={change}
                />
              )}

              <Modal isOpen={isOpen} onClose={onClose}>
                {isWrongExtension && <div>плохой файл</div>}
                {isExistingFiles && <div>есть файлы</div>}
                {isModeThen && <div>дофига файлов</div>}
                {sizeFile && <div>{sizeFile}</div>}
              </Modal>
            </Styles.WrapperFile>
          </Styles.WrapFiles>
        );
      }}
    </Field>
  );
};
export { PhotoFiles };
