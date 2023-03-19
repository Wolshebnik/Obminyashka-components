import { useEffect, useState } from 'react';

import Portal from '.';
import { IPopup } from './types';
import * as Styles from './styles';

const Modal = ({ children }: IPopup) => {
  const [isOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => document.body.removeAttribute('style');
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open</button>
      {isOpen && (
        <Portal>
          <Styles.Overlay onClick={() => setModalOpen(false)}>
            <Styles.ModalWindow onClick={(event) => event.stopPropagation()}>
              {children}
              <Styles.ButtonClose onClick={() => setModalOpen(false)}>
                <Styles.Cross />
              </Styles.ButtonClose>
            </Styles.ModalWindow>
          </Styles.Overlay>
        </Portal>
      )}
    </>
  );
};

export { Modal };
