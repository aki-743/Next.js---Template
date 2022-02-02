import { FormInputLabel } from '../../../Atoms/Label';
import { BaseInputProps, PasswordInput } from '../../../Atoms/Input';
import { ExplainUITooltip } from '../../Tooltip';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';

const ToggleEditPasswordInputField = (props: BaseInputProps) => {
  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={props.label} />
        {props.tooltipTitle && props.isEditing && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      {props.isEditing ? (
        <>
          <PasswordInput {...props} />
          <InputValidateError errors={props.errors} />
          {props.helperText && <HelperText text={props.helperText} />}
        </>
      ) : (
        <span>************</span>
      )}
    </div>
  );
};

export default ToggleEditPasswordInputField;
