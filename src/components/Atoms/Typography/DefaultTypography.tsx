import { Typography } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseTypoGraphyProps } from '.';

const DefaultTypography = forwardRef<HTMLSpanElement, PropsWithChildren<BaseTypoGraphyProps>>(function render(props, ref) {
  return (
    <Typography ref={ref} {...props}>
      {props.children}
    </Typography>
  );
});

export default DefaultTypography;
