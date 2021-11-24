import { InputValidateError } from '../../../Atoms/Error';
import { FormInputLabel } from '../../../Atoms/Label';
import { HelperText } from '../../../Atoms/Text';
import { TelInput, TelInputProps } from '../../../Atoms/Input';
import { ExplainUITooltip } from '../../Tooltip';

const FORM_INPUT_LABEL = '電話番号（ハイフン無しで入力）';

const TelInputField = (props: TelInputProps) => {
  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={props.label} />
        {props.tooltipTitle && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      <TelInput {...props} />
      <InputValidateError errors={props.errors} />
      {props.helperText && <HelperText text={props.helperText} />}
    </div>
  );
};

export default TelInputField;
