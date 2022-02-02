import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { BaseInputProps } from '..';
import { forwardRef, useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import styles from '../Input.module.scss';
import classNames from 'classnames';

const SignUpAndSignInPasswordInput = forwardRef<HTMLDivElement, BaseInputProps>(function render(
  { id, className, inputRef, name, value, fullWidth, disabled, errors, onChange },
  ref,
) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <FormControl fullWidth={fullWidth} disabled={disabled} variant="outlined">
      <OutlinedInput
        id={id || name}
        className={classNames(styles.root, className)}
        ref={ref}
        inputRef={inputRef}
        name={name}
        type={isShowPassword ? 'text' : 'password'}
        value={value}
        error={Boolean(errors)}
        autoComplete="current-password"
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={toggleShowPassword} disabled={disabled} edge="end">
              {isShowPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
});

export default SignUpAndSignInPasswordInput;
