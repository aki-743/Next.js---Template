import classNames from 'classnames/bind';
import { forwardRef, useEffect, useRef } from 'react';
import ReactInputVerificationCode from 'react-verification-code-input';
import { BaseCodeInputProps } from '..';

const CodeInput = forwardRef<HTMLDivElement, BaseCodeInputProps>(function render(
  { id, className, fields, value, loading, onChange, onComplete },
  ref,
) {
  const inputsRef = useRef(null);

  const handleComplete = async () => {
    inputsRef?.current.iRefs[fields - 1].current.blur();
    await onComplete();
  };

  useEffect(() => {
    inputsRef?.current.iRefs[0].current.focus();
  }, []);

  return (
    <div id={id} className={classNames('flex justify-center', className)} ref={ref}>
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
});

export default CodeInput;
