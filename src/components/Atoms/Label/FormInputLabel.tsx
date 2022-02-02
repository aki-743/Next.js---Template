import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseLabelProps } from '.';

const FormInputLabel = forwardRef<HTMLDivElement, BaseLabelProps>(function render({ id, className, htmlFor, label }, ref) {
  return (
    <div id={id} className={classNames('inline-block mb-4', className)} ref={ref}>
      <label htmlFor={htmlFor}>
        <span className="font-bold">{label}</span>
      </label>
    </div>
  );
});

export default FormInputLabel;
