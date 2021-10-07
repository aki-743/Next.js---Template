import { useEffect, useRef, useState } from 'react';
import ReactInputVerificationCode from 'react-verification-code-input';
import { BaseCodeInputProps } from '../../types/CodeInput/props';

const CodeInput: React.FC<BaseCodeInputProps> = ({ fields = 6, onChange, onComplete }) => {
  const inputs = useRef(null);
  const [isLoading, setIsLoding] = useState(false);

  const handleOnComplete = async () => {
    setIsLoding(true);
    inputs.current?.iRefs[fields - 1].current.blur();
    await onComplete();
    setIsLoding(false);
  };
  0;

  useEffect(() => {
    inputs.current.iRefs[0].current.focus();
  }, []);

  return (
    <ReactInputVerificationCode
      ref={inputs}
      type="number"
      loading={isLoading}
      fields={fields}
      autoFocus={true}
      onChange={onChange}
      onComplete={handleOnComplete}
    />
  );
};

export default CodeInput;
