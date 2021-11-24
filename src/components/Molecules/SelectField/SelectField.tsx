import { FormInputLabel } from '../../Atoms/Label';
import { DefaultSelect, BaseSelectProps } from '../../Atoms/Select';
import { ExplainUITooltip } from '../Tooltip';
import { InputValidateError } from '../../Atoms/Error/';
import { HelperText } from '../../Atoms/Text';

const SelectField = (props: BaseSelectProps) => {
  return (
    <div>
      <FormInputLabel htmlFor={props.labelId} label={props.label} />
      {props.tooltipTitle && <ExplainUITooltip title={props.tooltipTitle} />}
      <DefaultSelect {...props} />
      <InputValidateError errors={props.errors} />
      {props.helperText && <HelperText text={props.helperText} />}
    </div>
  );
};

export default SelectField;
