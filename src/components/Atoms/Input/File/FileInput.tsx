import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseFileInputProps } from '..';

const FileInput = forwardRef<HTMLInputElement, BaseFileInputProps>(function render({ id, className, name, accept, value, onChange }, ref) {
  return (
    <input
      id={id || name}
      className={classNames('hidden', className)}
      ref={ref}
      type="file"
      name={name}
      accept={accept}
      value={value}
      onChange={onChange}
    />
  );
});

export default FileInput;
