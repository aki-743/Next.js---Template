import { Button } from '@material-ui/core';
import { BaseButtonProps } from './type';

const BaseButton: React.FC<BaseButtonProps> = ({ label, className, disabled, fullWidth, startIcon, onClick }) => {
  return (
    <Button
      className={`py-3 text-white bg-default ${className}`}
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

export default BaseButton;
