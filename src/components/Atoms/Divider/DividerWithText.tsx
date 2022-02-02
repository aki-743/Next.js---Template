import { Divider } from '@mui/material';
import { forwardRef } from 'react';
import { DividerWithTextProps } from '.';

const DividerWithText = forwardRef<HTMLHRElement, DividerWithTextProps>(function render({ className, text, align = 'center' }, ref) {
  return (
    <Divider className={className} ref={ref} textAlign={align}>
      {text}
    </Divider>
  );
});

export default DividerWithText;
