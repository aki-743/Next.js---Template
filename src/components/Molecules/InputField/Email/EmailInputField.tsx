import { FormInputLabel } from '../../../Atoms/Label';
import { BaseInputProps, EmailInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import { ExplainUITooltip } from '../../Tooltip';
import { forwardRef } from 'react';

const EmailInputField = forwardRef<HTMLDivElement, BaseInputProps>(function render(
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
      <EmailInput
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

export default EmailInputField;
