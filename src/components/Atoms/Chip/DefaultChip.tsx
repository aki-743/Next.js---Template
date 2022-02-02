import { Chip } from '@mui/material';
import { forwardRef } from 'react';
import { BaseChipProps } from '.';

const DefaultChip = forwardRef<HTMLDivElement, BaseChipProps>(function render({ className, label, color }, ref) {
  return (
    <div ref={ref}>
      <Chip className={className} label={label} color={color} />
    </div>
  );
});

export default DefaultChip;
