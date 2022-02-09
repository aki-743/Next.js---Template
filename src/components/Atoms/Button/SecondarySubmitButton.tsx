import { BaseButtonProps } from '.';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { LoadingButton } from '@mui/lab';
import { forwardRef } from 'react';

const SecondarySubmitButton = forwardRef<HTMLDivElement, BaseButtonProps>(function render(
  { id, className, label, type, bgTransparent, disabled, fullWidth, variant, size = 'md', startIcon, loading },
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
    <div id={id} className={classNames(styles.root, className)} ref={ref}>
      <LoadingButton
        className={classNames(styles.root, styles.secondary, sizeClassName)}
        fullWidth={fullWidth}
        variant={variant}
        type={type}
        loading={loading}
        startIcon={startIcon}
        disabled={disabled}
      >
        <span>{label}</span>
      </LoadingButton>
    </div>
  );
});

export default SecondarySubmitButton;
