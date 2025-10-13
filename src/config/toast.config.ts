import { ToastOptions } from 'react-toastify';

// Configuración por defecto para los toast
export const defaultToastConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

// Configuraciones específicas
export const toastConfig = {
  success: {
    ...defaultToastConfig,
    className: 'toast-success',
  },
  error: {
    ...defaultToastConfig,
    autoClose: 5000,
    className: 'toast-error',
  },
  warning: {
    ...defaultToastConfig,
    className: 'toast-warning',
  },
  info: {
    ...defaultToastConfig,
    className: 'toast-info',
  },
};

