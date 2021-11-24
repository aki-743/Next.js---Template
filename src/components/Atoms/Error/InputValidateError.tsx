import { useEffect, useState } from 'react';
import { FieldErrors } from '../../../../node_modules/react-hook-form/dist';
import styles from './InputValidateError.module.scss';

type Props = {
  errors?: FieldErrors;
};

const InputValidateError = ({ errors }: Props) => {
  /** エラーが発生しているオブジェクトのキー名 */
  const [errorKey, setErrorKey] = useState('');

  // オブジェクトのエラー対応
  useEffect(() => {
    if (errors) {
      const errorsKeys: string[] = Object.keys(errors);
      if (errorsKeys.length) {
        setErrorKey(errorsKeys[0]);
      }
    }
  }, [errors]);

  return (
    Boolean(errors) && (
      <div className={styles.root}>
        <span className={styles.message}>{errors.message || errors[errorKey]?.message}</span>
      </div>
    )
  );
};

export default InputValidateError;
