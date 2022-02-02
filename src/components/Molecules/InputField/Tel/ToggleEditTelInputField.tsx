import { InputValidateError } from '../../../Atoms/Error';
import { FormInputLabel } from '../../../Atoms/Label';
import { HelperText } from '../../../Atoms/Text';
import { TelInput, TelInputProps } from '../../../Atoms/Input';
import { ExplainUITooltip } from '../../Tooltip';

const TelInputField = (props: TelInputProps) => {
  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={props.label} />
        {props.tooltipTitle && props.isEditing && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      {props.isEditing ? (
        <>
          <TelInput {...props} />
          <InputValidateError errors={props.errors} />
          {props.helperText && <HelperText text={props.helperText} />}
        </>
      ) : (
        <span>{props.value}</span>
      )}
    </div>
  );
};

export default TelInputField;
