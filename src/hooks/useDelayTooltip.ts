import { useState, useEffect } from 'react';

export const useDelayTooltip = (
  delay: number
): [boolean, (isOpen: boolean) => void] => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!open) {
      setTimer(
        setTimeout(() => {
          setPreviewOpen(false);
        }, delay)
      );
    }

    if (open) {
      setTimer(null);
      setPreviewOpen(true);
      if (timer) {
        clearTimeout(timer);
      }
    }
  }, [open]);

  return [previewOpen, setOpen];
};
