import { toast, ToastContainerProps } from 'react-toastify';

const getOptions = (options?: ToastContainerProps) =>
  options ? options : { autoClose: 3000 };

const messageShow = () => ({
  info: (message: string, options?: ToastContainerProps) => {
    toast.info(message, getOptions(options));
  },
  success: (message: string, options?: ToastContainerProps) => {
    toast.success(message, getOptions(options));
  },
  warn: (message: string, options?: ToastContainerProps) => {
    toast.warn(message, getOptions(options));
  },
  error: (message: string, options?: ToastContainerProps) => {
    toast.error(message, getOptions(options));
  },
});

export const showMessage = messageShow();
