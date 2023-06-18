import { useEffect, useState } from 'react';

import { ChildrenProps } from 'types';

import { IModal } from './types';
import * as Styles from './styles';

const Modal = ({
  isOpen,
  onClose,
  children,
  duration = 300,
  withoutBg = false,
  hideButtonClose = false,
}: ChildrenProps<IModal>) => {
  const [closing, setClosing] = useState(false);

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
    <Styles.ModalWindow
      closing={closing}
      duration={duration}
      onClick={(event) => event.stopPropagation()}
    >
      <Styles.ExtraWrapper withoutBg={withoutBg}>
        {children}
      </Styles.ExtraWrapper>

      {!hideButtonClose && <Styles.ButtonClose onClick={handleClose} />}
    </Styles.ModalWindow>
  );
};

export { Modal };
