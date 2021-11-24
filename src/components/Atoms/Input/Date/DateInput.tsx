import { BaseInputProps } from '..';
import { TextField } from '@mui/material';
import styles from '../Input.module.scss';

const DateInput = ({ id, name, value, fullWidth, disabled, errors, onChange }: BaseInputProps) => {
  return (
    <TextField
      id={id || name}
      className={styles.root}
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
};

export default DateInput;
