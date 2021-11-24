import { FormInputLabel } from '../../../Atoms/Label';
import { ExplainUITooltip } from '../../Tooltip';
import { BaseCodeInputProps, BaseInputProps, CodeInput, HiddenInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';

const VERIFICATION_CODE_INPUT_AUTOCOMPLETE = 'one-time-code';
const VERIFICATION_CODE_INPUT_MAX_LENGTH = 6;

type Props = BaseCodeInputProps & BaseInputProps;

const VerificationCodeInputField = (props: Props) => {
  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={props.label} />
        {props.tooltipTitle && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      <HiddenInput
        name={props.name}
        label={props.label}
        value={props.value}
        maxLength={VERIFICATION_CODE_INPUT_MAX_LENGTH}
        autoComplete={VERIFICATION_CODE_INPUT_AUTOCOMPLETE}
      />
      <CodeInput
        fields={props.fields}
        loading={props.disabled}
        value={props.value}
        onChange={props.onChange}
        onComplete={props.onComplete}
      />
      <InputValidateError errors={props.errors} />
      {props.helperText && <HelperText text={props.helperText} />}
    </div>
  );
};

export default VerificationCodeInputField;
