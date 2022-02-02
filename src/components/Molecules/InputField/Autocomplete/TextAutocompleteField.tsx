import { FormInputLabel } from '../../../Atoms/Label';
import { ExplainUITooltip } from '../../Tooltip';
import { TextAutocomplete, TextInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import { forwardRef } from 'react';
import { BaseAutocompleteFieldProps } from '..';

const TextAutocompleteField = forwardRef<HTMLDivElement, BaseAutocompleteFieldProps>(function render(
  { id, className, name, label, value, inputRef, options, getOptionLabel, tooltipTitle, helperText, errors, onChange },
  ref,
) {
  return (
    <div id={id} className={className} ref={ref}>
      <div>
        <FormInputLabel htmlFor={name} label={label} />
        {tooltipTitle && <ExplainUITooltip title={tooltipTitle} />}
      </div>
      <TextAutocomplete
        value={value}
        options={options}
        getOptionLabel={getOptionLabel}
        renderInput={(params) => <TextInput name={name} inputRef={inputRef} {...params} />}
        onChange={onChange}
      />
      <InputValidateError errors={errors} />
      {helperText && <HelperText text={helperText} />}
    </div>
  );
});

export default TextAutocompleteField;
