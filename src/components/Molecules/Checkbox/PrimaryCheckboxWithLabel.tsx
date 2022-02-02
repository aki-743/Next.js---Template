import { FormControlLabel } from '@mui/material';
import { PrimaryCheckbox } from '../../Atoms/Checkbox';
import { InputValidateError } from '../../Atoms/Error';
import { forwardRef } from 'react';
import { CheckboxWithLabelProps } from '.';

const PrimaryCheckboxWithLabel = forwardRef<HTMLDivElement, CheckboxWithLabelProps>(function render(
  { id, className, label, checkboxRef, checked, disabled, name, errors, onChange },
  ref,
) {
  return (
    <div id={id} className={className} ref={ref}>
      <FormControlLabel
        control={<PrimaryCheckbox ref={checkboxRef} checked={checked} onChange={onChange} name={name} />}
        disabled={disabled}
        label={label}
      />
      <InputValidateError errors={errors} />
    </div>
  );
});

export default PrimaryCheckboxWithLabel;
