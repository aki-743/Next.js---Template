import classNames from 'classnames';
import { forwardRef, useEffect, useState } from 'react';
import { InputValidateErrorProps } from '.';

const InputValidateError = forwardRef<HTMLDivElement, InputValidateErrorProps>(function render({ id, className, errors }, ref) {
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
      <div id={id} className={classNames('flex justify-between', className)} ref={ref}>
        <span className="mt-4 ml-4 text-12 text-red">{errors.message || errors[errorKey]?.message}</span>
      </div>
    )
  );
});

export default InputValidateError;
