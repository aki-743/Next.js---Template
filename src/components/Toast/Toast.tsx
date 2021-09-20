import { toast, Toaster } from 'react-hot-toast';

export const toastSucess = (message: string) => {
  toast.success(message);
};

const Toast: React.FC = () => {
  return <Toaster position="bottom-center" reverseOrder={false} />;
};

export default Toast;
