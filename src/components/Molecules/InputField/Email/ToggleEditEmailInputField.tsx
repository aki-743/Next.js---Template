import { FormInputLabel } from '../../../Atoms/Label';
import { BaseInputProps, EmailInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import { ExplainUITooltip } from '../../Tooltip';

const ToggleEditTextInputField = (props: BaseInputProps) => {
  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={props.label} />
        {props.tooltipTitle && props.isEditing && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      {props.isEditing ? (
        <>
          <EmailInput {...props} />
          <InputValidateError errors={props.errors} />
          {props.helperText && <HelperText text={props.helperText} />}
        </>
      ) : (
        <span>{props.value}</span>
      )}
    </div>
  );
};

export default ToggleEditTextInputField;
