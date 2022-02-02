import classNames from 'classnames';
import { forwardRef } from 'react';
import { LabelWithValueProps } from '.';
import { FormInputLabel } from '../../Atoms/Label';

const LabelWithValue = forwardRef<HTMLDivElement, LabelWithValueProps>(function render({ id, className, value, label }, ref) {
  return (
    <div id={id} className={classNames('flex items-start justify-start max-w-350', className)} ref={ref}>
      <FormInputLabel className="mr-12" label={label} />
      <span>{value}</span>
    </div>
  );
});

export default LabelWithValue;
