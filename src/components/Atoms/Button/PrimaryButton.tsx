import classNames from 'classnames';
import styles from './Button.module.scss';
import { LoadingButton } from '@mui/lab';
import { BaseButtonProps } from '.';

const PrimaryLoadingButton: React.FC<BaseButtonProps> = ({
  label,
  type,
  loading,
  disabled,
  fullWidth,
  size = 'md',
  startIcon,
  onClick,
}) => {
  const sizeClassName = classNames({
    'py-0': size === 'xs',
    'py-4': size === 'sm',
    'py-8': size === 'md',
    'py-12': size === 'lg',
  });

  return (
    <div className={styles.root}>
      <LoadingButton
        className={classNames(styles.primary, sizeClassName)}
        fullWidth={fullWidth}
        variant="contained"
        type={type}
        loading={loading}
        startIcon={startIcon}
        disabled={disabled}
        onClick={onClick}
      >
        <span>{label}</span>
      </LoadingButton>
    </div>
  );
};

export default PrimaryLoadingButton;
