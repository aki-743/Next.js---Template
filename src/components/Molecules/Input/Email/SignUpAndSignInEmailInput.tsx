import { BaseInputProps } from '../input';
import { ChangeEvent, useCallback, useState } from 'react';
import { validateEmail } from '../../../../common/validate';
import { TextField } from '@mui/material';
import styles from '../../../styles/Input.module.scss';

const SignUpAndSignInEmailInput: React.FC<BaseInputProps> = ({ id, name, value, fullWidth, disabled, limit, isRequired, onChange }) => {
  const [error, setError] = useState(false),
    [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);

      /** バリデーション */
      if (validateEmail(e.target.value)) {
        setError(false);
        return;
      } else {
        setError(true);
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
    [isRequired, limit, onChange],
  );

  return (
    <>
      <TextField
        id={id || name}
        className={styles.root}
        name={name}
        value={value}
        fullWidth={fullWidth}
        type="email"
        error={error}
        variant="outlined"
        disabled={disabled}
        onChange={handleChange}
      />
      <div className="flex justify-between">
        <div className="text-red">{error && errorMessage}</div>
        {limit && (
          <div>
            {value.length} / {limit}
          </div>
        )}
      </div>
    </>
  );
};

export default SignUpAndSignInEmailInput;
