import { useState } from 'react';

export const useDelayAnimation = (delay: number, immediateStart?: boolean) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);

  const setOpen = (open?: boolean) => {
    if (open) {
      setIsOpen(true);
      if (!immediateStart) {
        setTimeout(() => setIsAnimation(true), 1);
      } else {
        setIsAnimation(true);
      }
    }

    if (!open) {
      setIsAnimation(false);
      setTimeout(() => setIsOpen(false), delay);
    }
  };

  return { isOpen, isAnimation, setOpen };
};
