import { FormInputLabel } from '../../Atoms/Label';
import { AsyncSelect } from '../Select';
import { ExplainUITooltip } from '../../Molecules/Tooltip';
import { AsyncSelectProps } from '../../Atoms/Select';
import { InputValidateError } from '../../Atoms/Error';
import { HelperText } from '../../Atoms/Text';

const AsyncSelectField = (props: AsyncSelectProps) => {
  return (
    <div>
      <FormInputLabel htmlFor={props.labelId} label={props.label} />
      {props.tooltipTitle && <ExplainUITooltip title={props.tooltipTitle} />}
      <AsyncSelect {...props} />
      <InputValidateError errors={props.errors} />
      {props.helperText && <HelperText text={props.helperText} />}
    </div>
  );
};

export default AsyncSelectField;
