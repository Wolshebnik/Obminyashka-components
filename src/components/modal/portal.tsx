import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ChildrenProps } from 'types';

const Portal = ({ children }: ChildrenProps) => {
  const portalElement = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(portalElement);

    return () => {
      document.body.removeChild(portalElement);
    };
  }, [portalElement]);

  return createPortal(children, portalElement);
};

export { Portal };
