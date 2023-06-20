import { useRef } from 'react';

import { ChildrenProps } from 'types';

import { IModal } from './types';
import * as Styles from './styles';
import { Overlay } from '../overlay';

const Modal = ({
  isOpen,
  onClose,
  children,
  duration,
  withoutBg,
  isAnimation,
  hideButtonClose,
}: ChildrenProps<IModal>) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Overlay
      isOpen={isOpen}
      childRef={ref}
      duration={duration}
      isAnimation={isAnimation}
      setClose={onClose}
    >
      <Styles.ModalWindow
        ref={ref}
        duration={duration}
        isCloseAnimation={isAnimation}
      >
        <Styles.ExtraWrapper withoutBg={withoutBg}>
          {children}
        </Styles.ExtraWrapper>

        {!hideButtonClose && <Styles.ButtonClose onClick={onClose} />}
      </Styles.ModalWindow>
    </Overlay>
  );
};

export { Modal };
