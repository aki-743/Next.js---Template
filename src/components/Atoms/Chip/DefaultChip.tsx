import { Chip } from '@mui/material';
import { forwardRef } from 'react';
import { BaseChipProps } from '.';

const DefaultChip = forwardRef<HTMLDivElement, BaseChipProps>(function render({ id, className, label, color }, ref) {
  return <Chip id={id} className={className} ref={ref} label={label} color={color} />;
});

export default DefaultChip;
