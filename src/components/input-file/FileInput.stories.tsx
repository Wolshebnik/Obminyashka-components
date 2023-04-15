import { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { options } from 'utils';

import { InputFile } from '.';
import * as Styles from './styles';
import { InputOnChangeEventType } from './types';

export default {
  title: 'InputFile',
  component: InputFile,
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = (args) => {
  const [blobFiles, setBlobFiles] = useState<File[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const onChange = (e: InputOnChangeEventType, dropFiles?: File[]) => {
    let files: File[] = [];

    if (e.target instanceof HTMLInputElement && e.target.files) {
      files = [...e.target.files];
    }

    if (dropFiles) {
      files = [...dropFiles];
    }

    files.forEach((element: File) => {
      const reader = new FileReader();
      reader.readAsDataURL(element);

      reader.onload = async ({ target }) => {
        if (target?.readyState === 2) {
          const imageBase64 = target.result as string;
          const compressedFile: File = await imageCompression(element, options);

          setImages((prev) => [...prev, imageBase64]);
          setBlobFiles((prev) => [...prev, compressedFile]);
          if (e.target instanceof HTMLInputElement && e.target.value) {
            e.target.value = '';
          }
        }
      };
    });
  };

  // eslint-disable-next-line no-console
  console.log({ blobFiles, images });

  return (
    <Styles.WrapFiles>
      <InputFile {...args} onChange={onChange} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((file, index) => (
          <img
            key={index}
            src={file}
            alt="preview"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: 10,
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
    </Styles.WrapFiles>
  );
};
export const InputFileDefault = Template.bind({});
InputFileDefault.args = {
  type: 'file',
  name: 'images',
  error: 'Error',
};
