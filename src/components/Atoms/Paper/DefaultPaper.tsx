import { Paper } from '@mui/material';
import { forwardRef } from 'react';
import { BasePaperProps } from '.';

const DefaultPaper = forwardRef<HTMLDivElement, BasePaperProps>(function render(props, ref) {
  return (
    <Paper ref={ref} {...props}>
      {props.children}
    </Paper>
  );
});

export default DefaultPaper;
