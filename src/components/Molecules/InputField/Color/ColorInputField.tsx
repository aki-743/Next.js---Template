import { FormInputLabel } from '../../../Atoms/Label';
import { ExplainUITooltip } from '../../Tooltip';
import { BaseInputProps, ColorInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import { forwardRef } from 'react';

const ColorInputField = forwardRef<HTMLDivElement, BaseInputProps>(function render(
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
      <ColorInput
        name={name}
        value={value}
        inputRef={inputRef}
        placeholder={placeholder}
        fullWidth={fullWidth}
        autoComplete={autoComplete}
        disabled={disabled}
        inputProps={inputProps}
        maxLength={maxLength}
        InputProps={InputProps}
        startAdornment={startAdornment}
        InputLabelProps={InputLabelProps}
        onChange={onChange}
        endAdornment={value}
      />
      <InputValidateError errors={errors} />
      {helperText && <HelperText text={helperText} />}
    </div>
  );
});

export default ColorInputField;
