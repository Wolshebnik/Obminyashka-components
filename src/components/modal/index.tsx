import { useEffect, useState } from 'react';

import { ChildrenProps } from 'types';

import { IModal } from './types';
import { Portal } from './portal';
import * as Styles from './styles';

const Modal = ({
  isOpen,
  onClose,
  children,
  hideButtonClose = false,
}: ChildrenProps<IModal>) => {
  const [closing, setClosing] = useState(false);
  const duration = 300;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => document.body.removeAttribute('style');
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    const closeTimeout = setTimeout(() => {
      setClosing(false);
      onClose(false);
      clearTimeout(closeTimeout);
    }, duration);
  };

  return (
    <>
      {isOpen && (
        <Portal>
          <Styles.Overlay
            closing={closing}
            duration={duration}
            onClick={() => onClose(false)}
          >
            <Styles.ModalWindow
              closing={closing}
              duration={duration}
              onClick={(event) => event.stopPropagation()}
            >
              {children}

              {!hideButtonClose && <Styles.ButtonClose onClick={handleClose} />}
            </Styles.ModalWindow>
          </Styles.Overlay>
        </Portal>
      )}
    </>
  );
};

export { Modal };
