import { RefObject, useEffect } from 'react';

const useOutsideClick = (
  ref: RefObject<HTMLDivElement> | null,
  callback: () => void
) => {
  //TODO types e
  const handleClick = (e: any) => {
    // eslint-disable-next-line no-console
    console.log(1);
    if (
      ref &&
      ref.current &&
      !ref.current.contains(e.target as HTMLDivElement)
    ) {
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
