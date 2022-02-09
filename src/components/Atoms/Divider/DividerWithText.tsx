import { Divider } from '@mui/material';
import { forwardRef } from 'react';
import { DividerWithTextProps } from '.';

const DividerWithText = forwardRef<HTMLHRElement, DividerWithTextProps>(function render({ id, className, text, align = 'center' }, ref) {
  return (
    <Divider id={id} className={className} ref={ref} textAlign={align}>
      {text}
    </Divider>
  );
});

export default DividerWithText;
