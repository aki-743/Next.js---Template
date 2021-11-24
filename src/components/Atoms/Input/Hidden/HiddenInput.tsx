import { InputAdornment, TextField } from '@mui/material';
import { BaseInputProps } from '..';
import styles from './HiddenInput.module.scss';

const HiddenInput = ({
  id,
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
}: BaseInputProps) => {
  return (
    <TextField
      id={id || name}
      className={styles.root}
      inputRef={inputRef}
      name={name}
      value={value}
      placeholder={placeholder}
      fullWidth={fullWidth}
      type="hidden"
      autoComplete={autoComplete}
      variant="outlined"
      multiline={multiline}
      rows={rows}
      disabled={disabled}
      inputProps={{
        ...inputProps,
        maxLength: maxLength,
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
};

export default HiddenInput;
