import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { ChildrenProps } from 'types';

import * as Styles from './styles';
import { IOverlay } from './types';
import { useOutsideClick } from 'hooks/useOutSideClick';

const listFocusable =
  'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, *[tabindex]:not([tabindex="-1"])';

export const Overlay = ({
  top,
  myRef,
  isOpen,
  onClose,
  childRef,
  children,
  delay = 300,
  setClosingAnimation,
}: ChildrenProps<IOverlay>) => {
  const [isAnimation, setIsAnimation] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleClose = () => {
    if (setClosingAnimation) {
      setClosingAnimation();
    }

    setIsAnimation(false);
    setTimeout(() => {
      onClose();
    }, delay);
  };

  useOutsideClick(childRef, () => {
    if (isTouched) {
      handleClose();
    }
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') handleClose();

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
      setIsAnimation(true);
      document.body.style.overflow = 'hidden';
      document.body.addEventListener('keydown', handleKeyDown);
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
      ref={myRef}
      delay={delay}
      isAnimation={isAnimation}
    >
      {children}
    </Styles.Overlay>,
    document.body
  );
};
