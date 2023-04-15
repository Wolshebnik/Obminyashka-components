import { useState } from 'react';

import dropsPng from 'assets/img/drag-n-drop.png';

import * as Styles from './styles';
import { IFileInput } from './types';
import { isMouseInBounds } from './helper';
import { ErrorDisplay } from '../error-display';

const InputFile = ({ name, onChange, type, error }: IFileInput) => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const inBounds = isMouseInBounds(e);
    if (inBounds) {
      setDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const inBounds = isMouseInBounds(e);
    if (!inBounds) {
      setDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    setDragging(false);
    onChange(e, files);
  };

  return (
    <Styles.FilesLabel
      error={error}
      onDrop={(e) => handleDrop(e)}
      onDragStart={(e) => handleDragEnter(e)}
      onDragOver={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
    >
      <Styles.Input
        multiple
        type={type}
        name={name}
        onChange={onChange}
        accept=".png, .jpg, .jpeg, .gif"
      />

      {dragging ? (
        <Styles.Image src={dropsPng} alt="drop" />
      ) : (
        <Styles.SpanAdd />
      )}

      {error && (
        <Styles.WrapError>
          <ErrorDisplay error={error} />
        </Styles.WrapError>
      )}
    </Styles.FilesLabel>
  );
};

export { InputFile };
