import { toast, Toaster } from 'react-hot-toast';

export const toastSucess = (message: string) => {
  toast.success(message);
};

export const toastError = (message: string) => {
  toast.error(message);
};

const Toast: React.FC = () => {
  return <Toaster position="bottom-center" reverseOrder={false} />;
};

export default Toast;
