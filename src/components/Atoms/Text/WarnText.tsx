import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseTextProps } from '.';

const WarnText = forwardRef<HTMLDivElement, BaseTextProps>(function render({ id, className, text }, ref) {
  return (
    <div id={id} className={classNames('text-red', className)} ref={ref} role="alert">
      {text}
    </div>
  );
});

export default WarnText;
