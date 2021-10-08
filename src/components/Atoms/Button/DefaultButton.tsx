import { useState } from 'react';
import { BaseButtonProps } from '../../types/Button/props';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { Button, CircularProgress } from '@mui/material';

const DefaultButton: React.FC<BaseButtonProps> = ({ label, type, disabled = false, fullWidth, size = 'md', startIcon, onClick }) => {
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
      setIsDisabled(true);
      setIsLoding(true);
      await onClick();
    } finally {
      setIsDisabled(false);
      setIsLoding(false);
    }
  };

  return (
    <div className={styles.root}>
      <Button
        className={classNames(styles.default, sizeClassName)}
        fullWidth={fullWidth}
        variant="contained"
        type={type}
        startIcon={startIcon}
        disabled={isDisabled}
        onClick={handleClick}
      >
        {isLoading && <CircularProgress className={styles.loading} size={14} />}
        <span>{label}</span>
      </Button>
    </div>
  );
};

export default DefaultButton;
