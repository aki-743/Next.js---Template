import { BaseButtonProps } from '.';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { LoadingButton } from '@mui/lab';
import { forwardRef } from 'react';

const DefaultSubmitButton = forwardRef<HTMLDivElement, BaseButtonProps>(function render(
  { label, bgTransparent, disabled, fullWidth, variant, size = 'md', loading, startIcon },
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
        className={classNames(styles.default, sizeClassName)}
        fullWidth={fullWidth}
        variant={variant}
        type="submit"
        loading={loading}
        startIcon={startIcon}
        disabled={disabled}
      >
        <span>{label}</span>
      </LoadingButton>
    </div>
  );
});

export default DefaultSubmitButton;
