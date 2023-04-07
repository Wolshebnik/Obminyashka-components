import { useState } from 'react';

import dropsPng from 'assets/img/drag-n-drop.png';

import * as Styles from './styles';
import { IFileInput } from './types';
import { ErrorDisplay } from '../error-display';

const InputFile = ({ name, onChange, type, error }: IFileInput) => {
  const [drag, setDrag] = useState<boolean>(false);

  function dragStartHandler(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDrag(false);
  }

  const dropHandler = (e: React.DragEvent<HTMLLabelElement>) => {
    const files = [...e.dataTransfer.files];
    setDrag(false);
    onChange(e, files);
  };

  return (
    <Styles.FilesLabel
      error={error}
      onDrop={(e) => dropHandler(e)}
      onDragOver={(e) => dragStartHandler(e)}
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
    >
      <Styles.Input
        multiple
        type={type}
        name={name}
        onChange={onChange}
        accept=".png, .jpg, .jpeg, .gif"
      />
      {drag ? <Styles.Image src={dropsPng} alt="drop" /> : <Styles.SpanAdd />}

      {error && (
        <Styles.WrapError>
          <ErrorDisplay error={error} />
        </Styles.WrapError>
      )}
    </Styles.FilesLabel>
  );
};

export { InputFile };
