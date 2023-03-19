import React from 'react';
import { createPortal } from 'react-dom';

import { IPopup } from './types';

const Portal = ({ children }: IPopup) => {
  const portalElement = document.createElement('div');

  React.useEffect(() => {
    document.body.appendChild(portalElement);

    return () => {
      document.body.removeChild(portalElement);
    };
  }, [portalElement]);

  return createPortal(children, portalElement);
};

export default Portal;
