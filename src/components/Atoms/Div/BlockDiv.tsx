import classNames from 'classnames';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseDivProps } from '.';

const BlockDiv = forwardRef<HTMLDivElement, PropsWithChildren<BaseDivProps>>(function render({ children, id, className, onClick }, ref) {
  return (
    <div id={id} className={classNames('block', className)} ref={ref} onClick={onClick}>
      {children}
    </div>
  );
});

export default BlockDiv;
