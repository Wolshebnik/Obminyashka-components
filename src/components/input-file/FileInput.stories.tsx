import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { LabelDragEventType, InputChangeEventType } from 'types';

import { InputFile } from '.';
import * as Styles from './styles';

const meta = {
  title: 'InputFile',
  component: InputFile,
} satisfies Meta<typeof InputFile>;

export default meta;
type Story = StoryObj<typeof InputFile>;

export const InputFileDefault: Story = {
  args: {
    name: 'images',
    error: 'Error',
  },
  render: (args) => {
    const [images, setImages] = useState<string[]>([]);

    const onChange = (
      e: InputChangeEventType | LabelDragEventType,
      dropFiles?: File[]
    ) => {
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
            setImages((prev) => [...prev, imageBase64]);
            if (e.target instanceof HTMLInputElement && e.target.value) {
              e.target.value = '';
            }
          }
        };
      });
    };

    return (
      <Styles.WrapFiles>
        <InputFile {...args} onChange={onChange} />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {images.map((file, index) => (
            <img
              src={file}
              key={index}
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
  },
};
