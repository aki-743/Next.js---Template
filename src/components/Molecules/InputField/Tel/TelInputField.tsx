import { InputValidateError } from '../../../Atoms/Error';
import { FormInputLabel } from '../../../Atoms/Label';
import { HelperText } from '../../../Atoms/Text';
import { BaseInputProps, TelInput } from '../../../Atoms/Input';
import { ExplainUITooltip } from '../../Tooltip';
import { forwardRef } from 'react';

const TelInputField = forwardRef<HTMLDivElement, BaseInputProps>(function render(
  {
    id,
    className,
    inputRef,
    name,
    label,
    value,
    placeholder,
    fullWidth,
    autoComplete,
    disabled,
    inputProps,
    maxLength,
    InputProps,
    startAdornment,
    InputLabelProps,
    tooltipTitle,
    helperText,
    errors,
    onChange,
  },
  ref,
) {
  return (
    <div id={id} className={className} ref={ref}>
      <div>
        <FormInputLabel htmlFor={name} label={label} />
        {tooltipTitle && <ExplainUITooltip title={tooltipTitle} />}
      </div>
      <TelInput
        name={name}
        inputRef={inputRef}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        maxLength={maxLength}
        InputProps={InputProps}
        startAdornment={startAdornment}
        InputLabelProps={InputLabelProps}
        fullWidth={fullWidth}
        inputProps={inputProps}
        disabled={disabled}
        onChange={onChange}
      />
      <InputValidateError errors={errors} />
      {helperText && <HelperText text={helperText} />}
    </div>
  );
});

export default TelInputField;
