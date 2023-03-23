import { useEffect, useState } from 'react';

import { ChildrenProps } from 'types';

import { IPopup } from './types';
import { Portal } from './portal';
import * as Styles from './styles';

const Modal = ({
  isOpen,
  onClose,
  children,
  hideButtonClose = false,
}: ChildrenProps<IPopup>) => {
  const [closing, setClosing] = useState(false);
  const duration = 1000;

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
            onClick={() => onClose(false)}
            duration={duration}
            closing={closing}
          >
            <Styles.ModalWindow
              onClick={(event) => event.stopPropagation()}
              duration={duration}
              closing={closing}
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
