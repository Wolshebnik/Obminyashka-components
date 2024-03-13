import React from 'react';
import * as Styles from './styles';
import { IModalProps } from '../types';

export const Modal = ({ active, setActive, children }: IModalProps) => {
  return (
    <>
      <Styles.ModalWrapper active={active} onClick={() => setActive(false)}>
        <Styles.ModalContent
          active={active}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </Styles.ModalContent>
      </Styles.ModalWrapper>
    </>
  );
};
