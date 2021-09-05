import { Button } from '@material-ui/core';
import { ReactNode } from 'react';
import { MaterialColor } from '../interfaces';

type Props = {
  label?: string;
  color?: MaterialColor;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  onClick?: () => void;
};

const colors = {
  main: 'bg-main',
  'main-light': 'bg-main-light',
  'main-dark': 'bg-main-dark',
  google: 'bg-google',
  facebook: 'bg-facebook',
  twitter: 'bg-twitter',
  warn: 'bg-warn',
  default: 'bg-default',
};

const CustomButton: React.FC<Props> = ({ label, color, className, disabled, fullWidth, startIcon, onClick }) => {
  return (
    <Button
      className={`py-3 text-white ${colors[color]} ${className}`}
      fullWidth={fullWidth}
      variant="contained"
      startIcon={startIcon}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
