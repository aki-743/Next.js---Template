import { Box } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseBoxProps } from '.';

const DashedBox = forwardRef<HTMLDivElement, PropsWithChildren<BaseBoxProps>>(function render({ children, id, className, component }, ref) {
  return (
    <Box id={id} className={className} ref={ref} component={component} sx={{ p: 2, border: '1px dashed grey', height: 'inherit' }}>
      {children}
    </Box>
  );
});

export default DashedBox;
