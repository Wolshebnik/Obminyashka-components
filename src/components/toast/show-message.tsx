import { toast } from 'react-toastify';

const messageShow = () => {
  toast.dismiss();
  toast.clearWaitingQueue();

  return {
    info: (message: string) => toast.info(message),
    success: (message: string) => toast.success(message),
    warn: (message: string) => toast.warn(message),
    error: (message: string) => toast.error(message),
  };
};

export const showMessage = messageShow();

// info: (message: string) => {
//   toast.dismiss();
//   toast.clearWaitingQueue();
//   toast.info(message);
// };
