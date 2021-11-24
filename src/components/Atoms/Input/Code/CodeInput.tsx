import { useEffect, useRef } from 'react';
import ReactInputVerificationCode from 'react-verification-code-input';
import { BaseCodeInputProps } from '..';
import styles from './CodeInput.module.scss';

const CodeInput = ({ fields, value, loading, onChange, onComplete }: BaseCodeInputProps) => {
  const inputsRef = useRef(null);

  const handleComplete = async () => {
    inputsRef?.current.iRefs[fields - 1].current.blur();
    await onComplete();
  };

  useEffect(() => {
    inputsRef?.current.iRefs[0].current.focus();
  }, []);

  return (
    <div className={styles['code-input']}>
      <ReactInputVerificationCode
        ref={inputsRef}
        values={value.split('')}
        type="number"
        loading={loading}
        fields={fields}
        autoFocus={true}
        onChange={onChange}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default CodeInput;
