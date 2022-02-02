import { Checkbox } from '@mui/material';
import { forwardRef } from 'react';
import { BaseCheckboxProps } from '.';

const PrimaryCheckbox = forwardRef<HTMLButtonElement, BaseCheckboxProps>(function render(props, ref) {
  return <Checkbox ref={ref} {...props} />;
});

export default PrimaryCheckbox;
