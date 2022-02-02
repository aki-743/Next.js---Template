import { Skeleton } from '@mui/material';
import { forwardRef } from 'react';
import { BaseSkeltonProps } from '.';

const WaveSkelton = forwardRef<HTMLSpanElement, BaseSkeltonProps>(function render({ id, className, width, height }, ref) {
  return <Skeleton id={id} className={className} ref={ref} animation="wave" variant="text" width={width} height={height} />;
});

export default WaveSkelton;
