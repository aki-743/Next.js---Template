import { FormInputLabel } from '../../../Atoms/Label';
import { BaseInputProps, DateInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import { ExplainUITooltip } from '../../Tooltip';
import { useMemo } from 'react';

const ToggleEditDateInputField = (props: BaseInputProps) => {
  const formattedValue = useMemo(() => {
    if (!props.isEditing) {
      const values = props.value.split('-');
      return `${values[0]}年 ${values[1].replace(/^0/, '')}月${values[2].replace(/^0/, '')}日`;
    }
  }, [props.value, props.isEditing]);

  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={props.label} />
        {props.tooltipTitle && props.isEditing && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      {props.isEditing ? (
        <>
          <DateInput {...props} />
          <InputValidateError errors={props.errors} />
          {props.helperText && <HelperText text={props.helperText} />}
        </>
      ) : (
        <span>{formattedValue}</span>
      )}
    </div>
  );
};

export default ToggleEditDateInputField;
