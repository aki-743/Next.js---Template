import { FormInputLabel } from '../../../Atoms/Label';
import { BaseInputProps, EmailInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import { ExplainUITooltip } from '../../Tooltip';

const FORM_INPUT_LABEL = 'メールアドレス';

const SignUpAndSignInEmailInputField = (props: BaseInputProps) => {
  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={FORM_INPUT_LABEL} />
        {props.tooltipTitle && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      <EmailInput {...props} />
      <InputValidateError errors={props.errors} />
      {props.helperText && <HelperText text={props.helperText} />}
    </div>
  );
};

export default SignUpAndSignInEmailInputField;
