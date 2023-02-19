import { ToastContainer } from 'react-toastify';
import { ToastContainerProps } from 'react-toastify';

import { showMessage } from './show-message';

import * as Styles from './styles';
import 'react-toastify/dist/ReactToastify.css';

const Toast = (props: ToastContainerProps) => {
  return (
    <Styles.Container>
      <ToastContainer {...props} />
    </Styles.Container>
  );
};

export { Toast, showMessage };
