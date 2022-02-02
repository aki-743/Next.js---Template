import { FormInputLabel } from '../../Atoms/Label';
import { DefaultSelect, BaseSelectProps } from '../../Atoms/Select';
import { ExplainUITooltip } from '../Tooltip';
import { InputValidateError } from '../../Atoms/Error/';
import { HelperText } from '../../Atoms/Text';

const ToggleEditSelectField = (props: BaseSelectProps) => {
  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={props.label} />
        {props.tooltipTitle && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      {props.isEditing ? (
        <>
          <DefaultSelect {...props} />
        </>
      ) : (
        <span>{props.elements[props.value]}</span>
      )}
      <InputValidateError errors={props.errors} />
      {props.helperText && <HelperText text={props.helperText} />}
    </div>
  );
};

export default ToggleEditSelectField;
