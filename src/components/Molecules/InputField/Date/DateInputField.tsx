import { FormInputLabel } from '../../../Atoms/Label';
import { BaseInputProps, DateInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import { ExplainUITooltip } from '../../Tooltip';

const DateInputField = (props: BaseInputProps) => {
  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={props.label} />
        {props.tooltipTitle && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      <DateInput {...props} />
      <InputValidateError errors={props.errors} />
      {props.helperText && <HelperText text={props.helperText} />}
    </div>
  );
};

export default DateInputField;
