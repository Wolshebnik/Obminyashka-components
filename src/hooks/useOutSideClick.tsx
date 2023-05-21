import { RefObject, useEffect } from 'react';

const useOutsideClick = (
  ref: RefObject<HTMLDivElement> | null,
  callback: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export { useOutsideClick };
