import { BaseInputProps } from '..';
import { TextField } from '@mui/material';
import styles from '../Input.module.scss';
import classNames from 'classnames';
import { forwardRef } from 'react';

const DateInput = forwardRef<HTMLDivElement, BaseInputProps>(function render(
  { id, className, inputRef, name, value, fullWidth, disabled, errors, onChange },
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
      type="date"
      variant="outlined"
      error={Boolean(errors)}
      disabled={disabled}
      onChange={onChange}
    />
  );
});

export default DateInput;
