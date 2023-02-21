import { ToastContainer, ToastContainerProps } from 'react-toastify';

import { showMessage } from './show-message';

import 'react-toastify/dist/ReactToastify.css';

const Toast = (props: ToastContainerProps) => {
  return <ToastContainer {...props} />;
};

export { Toast, showMessage };
