import { useState } from 'react';
import { BaseButtonProps } from '../types/button';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { Button, CircularProgress } from '@mui/material';

const DangerButton: React.FC<BaseButtonProps> = ({
  label,
  className = '',
  disabled = false,
  fullWidth,
  loading,
  size = 'md',
  startIcon,
  onClick,
}) => {
  const [isDisabled, setIsDisabled] = useState(disabled),
    [isLoading, setIsLoding] = useState(false);

  const sizeClassName = classNames({
    'py-0': size === 'xs',
    'py-1': size === 'sm',
    'py-2': size === 'md',
    'py-3': size === 'lg',
  });

  const handleClick = async () => {
    try {
      // 処理中にローディングを表示する場合
      if (loading) {
        setIsDisabled(true);
        setIsLoding(true);
      }
      await onClick();
    } finally {
      setIsDisabled(false);
      setIsLoding(false);
    }
  };

  return (
    <Button
      className={`text-white bg-warn ${styles['comp-root']} ${sizeClassName} ${className}`}
      fullWidth={fullWidth}
      variant="contained"
      startIcon={startIcon}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {isLoading && <CircularProgress className="text-white mr-[5px]" size={14} />}
      {label}
    </Button>
  );
};

export default DangerButton;
