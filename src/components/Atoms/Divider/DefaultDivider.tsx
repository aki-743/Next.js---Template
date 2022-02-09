import { Divider } from '@mui/material';
import { forwardRef } from 'react';
import { BaseDividerProps } from '.';

const DefaultDivider = forwardRef<HTMLHRElement, BaseDividerProps>(function render({ id, className }, ref) {
  return <Divider id={id} className={className} ref={ref} />;
});

export default DefaultDivider;
