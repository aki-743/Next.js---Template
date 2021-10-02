import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { ChangeEvent, useCallback, useState } from 'react';
import { validateFunctionObj } from '../../common/validate';
import { BaseTextInputProps } from '../types/text-input';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';

const MaskTextInput: React.FC<BaseTextInputProps> = ({ label, value, fullWidth, disabled, onChange }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <FormControl fullWidth={fullWidth} disabled={disabled} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        type={isShowPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} disabled={disabled} edge="end">
              {isShowPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

const TextInput: React.FC<BaseTextInputProps> = ({
  className,
  label,
  value,
  type,
  fullWidth,
  disabled,
  multiline,
  rows,
  limit,
  isRequired,
  onChange,
}) => {
  const [error, setError] = useState(false),
    [errorMessage, setErrorMessage] = useState('');
  const validateFunction = validateFunctionObj[type];

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);

      /** バリデーション */
      if (validateFunction) {
        if (validateFunction(e.target.value)) {
          setError(false);
          return;
        } else {
          setError(true);
        }
      }

      if (limit) {
        if (e.target.value.length > limit) {
          setError(true);
          setErrorMessage('文字数制限を超えています');
          /** ここでreturnしないとisRequiredで上書きされる */
          return;
        } else {
          setError(false);
        }
      }

      /** 必須項目が入力されているか */
      if (isRequired) {
        if (e.target.value.length === 0) {
          setError(true);
          setErrorMessage('必須項目です');
        } else {
          setError(false);
        }
      }
    },
    [isRequired, limit, onChange, validateFunction],
  );

  return (
    <div className={`${className}`}>
      {type === 'password' ? (
        <MaskTextInput label={label} value={value} fullWidth={fullWidth} disabled={disabled} onChange={handleChange} />
      ) : (
        <TextField
          label={isRequired ? `${label}（必須）` : label}
          value={value}
          fullWidth={fullWidth}
          type={type || 'text'}
          error={error}
          variant="outlined"
          disabled={disabled}
          multiline={multiline}
          rows={rows || 1}
          onChange={handleChange}
        />
      )}
      <div className="flex justify-between">
        <div className="text-red">{error && errorMessage}</div>
        {limit && (
          <div>
            {value.length} / {limit}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
