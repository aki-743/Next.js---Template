import classNames from 'classnames/bind';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseDivProps } from '.';

const InlineBlockDiv = forwardRef<HTMLDivElement, PropsWithChildren<BaseDivProps>>(function RenderInlineBlockDiv(
  { children, className, onClick },
  ref,
) {
  return (
    <div className={classNames('inline-block', className)} ref={ref} onClick={onClick}>
      {children}
    </div>
  );
});

export default InlineBlockDiv;
