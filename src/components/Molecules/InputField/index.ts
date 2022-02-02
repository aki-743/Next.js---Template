import { Ref } from 'react';
import { BaseAutocompleteProps, BaseCodeInputProps, BaseInputProps } from '../../Atoms/Input';

export declare type BaseAutocompleteFieldProps = {
  /** inputのref */
  inputRef?: Ref<HTMLDivElement>;
} & BaseAutocompleteProps;

export declare type BaseCodeInputFieldProps = BaseCodeInputProps & BaseInputProps;

export { default as TextAutocompleteField } from './Autocomplete/TextAutocompleteField';
export { default as VerificationCodeInputField } from './Code/VerificationCodeInputField';
export { default as ColorInputField } from './Color/ColorInputField';
export { default as ToggleEditColorInputField } from './Color/ToggleEditColorInputField';
export { default as DateInputField } from './Date/DateInputField';
export { default as ToggleEditDateInputField } from './Date/ToggleEditDateInputField';
export { default as ToggleEditEmailInputField } from './Email/ToggleEditEmailInputField';
export { default as EmailInputField } from './Email/EmailInputField';
export { default as PasswordInputField } from './Password/PasswordInputField';
export { default as ToggleEditPasswordInputField } from './Password/ToggleEditPasswordInputField';
export { default as TelInputField } from './Tel/TelInputField';
export { default as ToggleEditTelInputField } from './Tel/ToggleEditTelInputField';
export { default as TextInputField } from './Text/TextInputField';
export { default as ToggleEditTextInputField } from './Text/ToggleEditTextInputField';
