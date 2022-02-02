import { InputAdornment, TextField } from '@mui/material';
import classNames from 'classnames';
import { useCallback, createRef, forwardRef } from 'react';
import { BaseInputProps } from '..';
import styles from './ColorInput.module.scss';

const ColorInput = forwardRef<HTMLDivElement, BaseInputProps>(function render(
  {
    id,
    className,
    inputRef,
    name,
    value,
    placeholder,
    fullWidth,
    autoComplete,
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
  const colorInputRef = createRef<HTMLInputElement>();

  const handleColor = useCallback(() => {
    colorInputRef.current.click();
  }, [colorInputRef]);

  return (
    <div className={classNames(styles.root, className)} ref={ref}>
      <input ref={colorInputRef} type="color" value={value} onChange={onChange} />
      <div className={styles.color_display} style={{ backgroundColor: value }} onClick={handleColor}></div>
      <TextField
        id={id || name}
        inputRef={inputRef}
        name={name}
        value={value}
        placeholder={placeholder}
        fullWidth={fullWidth}
        autoComplete={autoComplete}
        variant="outlined"
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
    </div>
  );
});

export default ColorInput;
