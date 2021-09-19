import { ReactNode } from 'react';

export type BaseButtonProps = {
  label?: string;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  onClick?: () => void;
};
