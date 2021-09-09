import { TextField } from '@material-ui/core';
import { ChangeEvent, useCallback, useState } from 'react';
import { validateFunctionObj } from '../common/validate';

type Props = {
  label?: string;
  value?: string;
  fullWidth?: boolean;
  type?: string;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  limit?: number;
  isRequired?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = ({ label, value, type, fullWidth, disabled, multiline, rows, limit, isRequired, onChange }) => {
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
        } else {
          setError(true);
        }
      }

      if (limit) {
        console.log(e.target.value.length > limit);
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
    <div>
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
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
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
