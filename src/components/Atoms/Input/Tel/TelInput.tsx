import { InputAdornment, TextField } from '@mui/material';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseInputProps } from '..';
import styles from '../Input.module.scss';

const TelInput = forwardRef<HTMLDivElement, BaseInputProps>(function render(
  {
    id,
    className,
    inputRef,
    name,
    value,
    placeholder,
    fullWidth,
    autoComplete,
    multiline,
    rows,
    disabled,
    inputProps,
    maxLength,
    InputProps,
    startAdornment,
    endAdornment,
    InputLabelProps,
    errors,
    onChange,
  },
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
      placeholder={placeholder}
      fullWidth={fullWidth}
      type="tel"
      autoComplete={autoComplete}
      variant="outlined"
      multiline={multiline}
      rows={rows}
      disabled={disabled}
      inputProps={{
        ...inputProps,
        maxLength: maxLength,
        pattern: /[0-9]*/,
      }}
      InputProps={{
        ...InputProps,
        startAdornment: startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>,
        endAdornment: endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>,
      }}
      InputLabelProps={{
        ...InputLabelProps,
      }}
      error={Boolean(errors)}
      onChange={onChange}
    />
  );
});

export default TelInput;
