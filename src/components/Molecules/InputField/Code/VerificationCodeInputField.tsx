import { FormInputLabel } from '../../../Atoms/Label';
import { ExplainUITooltip } from '../../Tooltip';
import { CodeInput, HiddenInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import { forwardRef } from 'react';
import { BaseCodeInputFieldProps } from '..';

const VERIFICATION_CODE_INPUT_AUTOCOMPLETE = 'one-time-code';
const VERIFICATION_CODE_INPUT_MAX_LENGTH = 6;

const VerificationCodeInputField = forwardRef<HTMLDivElement, BaseCodeInputFieldProps>(function render(
  { id, className, name, label, value, inputRef, fields, disabled, tooltipTitle, helperText, errors, onComplete, onChange },
  ref,
) {
  return (
    <div id={id} className={className} ref={ref}>
      <div>
        <FormInputLabel htmlFor={name} label={label} />
        {tooltipTitle && <ExplainUITooltip title={tooltipTitle} />}
      </div>
      <HiddenInput
        name={name}
        label={label}
        value={value}
        inputRef={inputRef}
        maxLength={VERIFICATION_CODE_INPUT_MAX_LENGTH}
        autoComplete={VERIFICATION_CODE_INPUT_AUTOCOMPLETE}
      />
      <CodeInput fields={fields} loading={disabled} value={value} onChange={onChange} onComplete={onComplete} />
      <InputValidateError errors={errors} />
      {helperText && <HelperText text={helperText} />}
    </div>
  );
});

export default VerificationCodeInputField;
