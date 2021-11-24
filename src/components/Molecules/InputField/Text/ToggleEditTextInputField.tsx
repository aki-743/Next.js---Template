import { FormInputLabel } from '../../../Atoms/Label';
import { ExplainUITooltip } from '../../Tooltip';
import { BaseInputProps, TextInput } from '../../../Atoms/Input';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import { useCallback, useState } from 'react';
import { DefaultButton, PrimaryButton } from '../../../Atoms';

const ToggleEditTextInputField = (props: BaseInputProps) => {
  /** 編集モードの切替 */
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing, setIsEditing]);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <FormInputLabel htmlFor={props.name} label={props.label} />
          {props.tooltipTitle && <ExplainUITooltip title={props.tooltipTitle} />}
        </div>
        {isEditing ? (
          <>
            <TextInput {...props} />
            <DefaultButton label="キャンセル" size="sm" onClick={toggleIsEditing} />
          </>
        ) : (
          <>
            <span>{props.value}</span>
            <PrimaryButton label="編集" size="sm" onClick={toggleIsEditing} />
          </>
        )}
      </div>
      <InputValidateError errors={props.errors} />
      {props.helperText && <HelperText text={props.helperText} />}
    </div>
  );
};

export default ToggleEditTextInputField;
