import { FormInputLabel } from '../../../Atoms/Label';
import { ExplainUITooltip } from '../../Tooltip';
import { BaseAutocompleteProps, TextAutocomplete, TextInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';

const TextAutocompleteField = (props: BaseAutocompleteProps) => {
  return (
    <div>
      <div>
        <FormInputLabel htmlFor={props.name} label={props.label} />
        {props.tooltipTitle && <ExplainUITooltip title={props.tooltipTitle} />}
      </div>
      <TextAutocomplete
        value={props.value}
        options={props.options}
        getOptionLabel={props.getOptionLabel}
        renderInput={(params) => <TextInput {...params} {...props} />}
        onChange={props.onChange}
      />
      <InputValidateError errors={props.errors} />
      {props.helperText && <HelperText text={props.helperText} />}
    </div>
  );
};

export default TextAutocompleteField;
