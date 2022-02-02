import { FormInputLabel } from '../../../Atoms/Label';
import { ExplainUITooltip } from '../../Tooltip';
import { BaseInputProps, TextInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';

const ToggleEditTextInputField = (props: BaseInputProps) => {
  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={props.label} />
        {props.tooltipTitle && props.isEditing && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      {props.isEditing ? (
        <>
          <TextInput {...props} />
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
