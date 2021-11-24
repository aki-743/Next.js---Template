import classNames from 'classnames';
import styles from './Button.module.scss';
import { Button } from '@mui/material';
import { BaseButtonProps } from '.';

const FileInputButton = ({ label, disabled, fullWidth, size = 'md' }: BaseButtonProps) => {
  const sizeClassName = classNames({
    'py-0': size === 'xs',
    'py-4': size === 'sm',
    'py-8': size === 'md',
    'py-12': size === 'lg',
  });

  return (
    <div className={styles.root}>
      <Button
        className={classNames(styles.primary, sizeClassName)}
        fullWidth={fullWidth}
        disabled={disabled}
        variant="contained"
        component="span"
      >
        <span>{label}</span>
      </Button>
    </div>
  );
};

export default FileInputButton;
