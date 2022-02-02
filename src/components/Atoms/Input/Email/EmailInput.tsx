import { BaseInputProps } from '..';
import { TextField } from '@mui/material';
import styles from '../Input.module.scss';
import { forwardRef } from 'react';
import classNames from 'classnames';

const EmailInput = forwardRef<HTMLDivElement, BaseInputProps>(function render(
  { id, className, name, inputRef, value, fullWidth, disabled, errors, onChange },
  ref,
) {
  return (
    <TextField
      id={id || name}
      className={classNames(styles.root, className)}
      ref={ref}
      inputRef={inputRef}
      name={name}
      value={value}
      fullWidth={fullWidth}
      autoComplete="email"
      type="email"
      variant="outlined"
      disabled={disabled}
      error={Boolean(errors)}
      onChange={onChange}
    />
  );
});

export default EmailInput;
