import { Button } from '@material-ui/core';
import { BaseButtonProps } from './type';
import classNames from 'classnames';

const PrimaryButton: React.FC<BaseButtonProps> = ({ label, className, disabled, fullWidth, size, startIcon, onClick }) => {
  const sizeClassName = classNames({
    'py-0': size === 'xs',
    'py-1': size === 'sm',
    'py-2': size === 'md',
    'py-3': size === 'lg',
  });

  return (
    <Button
      className={`py-3 text-white bg-main ${sizeClassName} ${className}`}
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

export default PrimaryButton;
