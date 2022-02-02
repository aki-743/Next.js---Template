import { forwardRef } from 'react';
import { BaseTextProps } from '.';

const HelperText = forwardRef<HTMLDivElement, BaseTextProps>(function render({ id, className, text }, ref) {
  return (
    <div id={id} className={className} ref={ref}>
      <span className="mt-4 ml-4 text-12">{text}</span>
    </div>
  );
});

export default HelperText;
