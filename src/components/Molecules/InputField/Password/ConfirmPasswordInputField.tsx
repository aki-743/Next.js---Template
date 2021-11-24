import { FormInputLabel } from '../../../Atoms/Label';
import { BaseInputProps, PasswordInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import { ExplainUITooltip } from '../../Tooltip';

const FORM_INPUT_LABEL = '確認用パスワード';

const ConfirmPasswordInput = (props: BaseInputProps) => {
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

export default ConfirmPasswordInput;
