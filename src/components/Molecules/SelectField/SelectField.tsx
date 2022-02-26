import { FormInputLabel } from '../../Atoms/Label';
import { DefaultSelect, BaseSelectProps } from '../../Atoms/Select';
import { ExplainUITooltip } from '../Tooltip';
import { InputValidateError } from '../../Atoms/Error/';
import { HelperText } from '../../Atoms/Text';
import { forwardRef } from 'react';

const SelectField = forwardRef<HTMLDivElement, BaseSelectProps>(function render(
  {
    id,
    className,
    selectRef,
    name,
    label,
    open,
    onOpen,
    onClose,
    value,
    elements,
    fullWidth,
    disabled,
    isRequired = true,
    tooltipTitle,
    helperText,
    errors,
    onChange,
  },
  ref,
) {
  return (
    <div id={id} className={className} ref={ref}>
      <div>
        <FormInputLabel htmlFor={name} label={label} isRequired={isRequired} />
        {tooltipTitle && <ExplainUITooltip title={tooltipTitle} />}
      </div>
      <DefaultSelect
        ref={selectRef}
        name={name}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        value={value}
        elements={elements}
        fullWidth={fullWidth}
        disabled={disabled}
        onChange={onChange}
      />
      <InputValidateError errors={errors} />
      {helperText && <HelperText text={helperText} />}
    </div>
  );
});

export default SelectField;
