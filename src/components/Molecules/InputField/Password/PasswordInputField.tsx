import { FormInputLabel } from '../../../Atoms/Label';
import { BaseInputProps, PasswordInput } from '../../../Atoms/Input';
import { ExplainUITooltip } from '../../Tooltip';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';

const FORM_INPUT_LABEL = 'パスワード';

const SignInPasswordInputField = (props: BaseInputProps) => {
  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={FORM_INPUT_LABEL} />
        {props.tooltipTitle && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      <PasswordInput {...props} />
      <InputValidateError errors={props.errors} />
      {props.helperText && <HelperText text={props.helperText} />}
    </div>
  );
};

export default SignInPasswordInputField;
