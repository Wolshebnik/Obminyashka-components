import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';

import { ChildrenProps } from 'types';
import { useOutsideClick } from 'hooks';

import * as Styles from './styles';
import { IOverlay } from './types';

const listFocusable =
  'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, *[tabindex]:not([tabindex="-1"])';

export const Overlay = ({
  isOpen,
  top = 0,
  setClose,
  isHeader,
  childRef,
  children,
  isAnimation,
  duration = 300,
}: ChildrenProps<IOverlay>) => {
  const [isTouched, setIsTouched] = useState(false);

  useOutsideClick(() => {
    if (isTouched) {
      setClose();
    }
  }, childRef);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') setClose();

    if ((childRef?.current === null && event.key) === 'Tab') {
      event.preventDefault();
    }

    if (childRef && event.key === 'Tab' && childRef.current) {
      const focusable =
        childRef.current.querySelectorAll<HTMLElement>(listFocusable);

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const firstFocusableElement = focusable[0];
      const lastFocusableElement = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsTouched(true);
      document.body.style.overflow = 'hidden';
      document.body.addEventListener('keydown', handleKeyDown);

      if (childRef && childRef.current) {
        childRef.current.tabIndex = -1;
        childRef.current.style.outline = 'none';
        childRef.current.focus();
      }
    }

    return () => {
      setIsTouched(false);
      document.body.removeAttribute('style');
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Styles.Overlay
      top={top}
      tabIndex={0}
      duration={duration}
      isHeader={isHeader}
      isAnimation={isAnimation}
    >
      {children}
    </Styles.Overlay>,
    document.body
  );
};
