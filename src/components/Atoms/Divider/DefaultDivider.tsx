import { Divider } from '@mui/material';
import { forwardRef } from 'react';
import { BaseDividerProps } from '.';

const DefaultDivider = forwardRef<HTMLHRElement, BaseDividerProps>(function render({ className }, ref) {
  return <Divider className={className} ref={ref} />;
});

export default DefaultDivider;
