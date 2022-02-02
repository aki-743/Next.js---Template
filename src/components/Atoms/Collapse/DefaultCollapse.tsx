import { Collapse } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseCollapseProps } from '.';

const DefaultCollapse = forwardRef<HTMLElement, PropsWithChildren<BaseCollapseProps>>(function render({ children, className, open }, ref) {
  return (
    <Collapse className={className} ref={ref} in={open}>
      {children}
    </Collapse>
  );
});

export default DefaultCollapse;
