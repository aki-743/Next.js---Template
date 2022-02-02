import classNames from 'classnames';
import styles from './Button.module.scss';
import { LoadingButton } from '@mui/lab';
import { BaseButtonProps } from '.';
import { forwardRef } from 'react';

const PrimaryLoadingButton = forwardRef<HTMLDivElement, BaseButtonProps>(function render(
  { label, type, loading, bgTransparent, disabled, fullWidth, variant, size = 'md', startIcon, className, onClick },
  ref,
) {
  const sizeClassName = classNames({
    'py-0': size === 'xs',
    'py-4': size === 'sm',
    'py-8': size === 'md',
    'py-12': size === 'lg',
    [styles.transparent]: bgTransparent,
  });

  return (
    <div className={styles.root} ref={ref}>
      <LoadingButton
        className={classNames(styles.primary, sizeClassName, className)}
        fullWidth={fullWidth}
        variant={variant}
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
});

export default PrimaryLoadingButton;
