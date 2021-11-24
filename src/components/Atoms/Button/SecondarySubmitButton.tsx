import { BaseButtonProps } from '.';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { LoadingButton } from '@mui/lab';

const SecondarySubmitButton: React.FC<BaseButtonProps> = ({ label, type, disabled, fullWidth, size = 'md', startIcon, loading }) => {
  const sizeClassName = classNames({
    'py-0': size === 'xs',
    'py-4': size === 'sm',
    'py-8': size === 'md',
    'py-12': size === 'lg',
  });
  return (
    <div className={styles.root}>
      <LoadingButton
        className={classNames(styles.root, styles.secondary, sizeClassName)}
        fullWidth={fullWidth}
        variant="contained"
        type={type}
        loading={loading}
        startIcon={startIcon}
        disabled={disabled}
      >
        <span>{label}</span>
      </LoadingButton>
    </div>
  );
};

export default SecondarySubmitButton;
