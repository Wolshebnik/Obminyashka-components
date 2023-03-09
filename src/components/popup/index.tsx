import ReactDOM from 'react-dom';

import { IPopup } from './types';
// import usePortal from './hooks/usePortal';

const root = document.getElementById('react-modals');

// export const Portal = ({
//   children,
//   className,
//   element: Element = 'div',
// }: IPopup) => {
//   return root
//     ? ReactDOM.createPortal(
//         <Styles.Element className={className}>{children}</Styles.Element>,
//         root
//       )
//     : null;
// };

export default function Portal({ children }: IPopup) {
  // const target = usePortal(id);

  return root ? ReactDOM.createPortal(children, root) : null;
}

// import React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './app';

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App children={} id={''} />, rootElement);
