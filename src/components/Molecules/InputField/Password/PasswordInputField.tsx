import { FormInputLabel } from '../../../Atoms/Label';
import { BaseInputProps, PasswordInput } from '../../../Atoms/Input';
import { ExplainUITooltip } from '../../Tooltip';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import { forwardRef } from 'react';

const SignInPasswordInputField = forwardRef<HTMLDivElement, BaseInputProps>(function render(
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
      <PasswordInput
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

export default SignInPasswordInputField;
