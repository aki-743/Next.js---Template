import { BaseInputProps } from '..';
import { TextField } from '@mui/material';
import styles from '../Input.module.scss';

const EmailInput = ({ id, name, value, fullWidth, disabled, errors, onChange }: BaseInputProps) => {
  return (
    <TextField
      id={id || name}
      className={styles.root}
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
};

export default EmailInput;
