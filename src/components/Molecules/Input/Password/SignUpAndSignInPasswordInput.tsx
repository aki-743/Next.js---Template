import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { BaseInputProps } from '../../../types/Input/props';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import styles from '../../../styles/Input.module.scss';

const SignUpAndSignInPasswordInput: React.FC<BaseInputProps> = ({ id, name, value, fullWidth, disabled, onChange }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <>
      <FormControl fullWidth={fullWidth} disabled={disabled} variant="outlined">
        <OutlinedInput
          id={id || name}
          className={styles.root}
          name={name}
          type={isShowPassword ? 'text' : 'password'}
          value={value}
          autoFocus={true}
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
    </>
  );
};

export default SignUpAndSignInPasswordInput;
