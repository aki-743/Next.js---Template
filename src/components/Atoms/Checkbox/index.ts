import { CheckboxProps, FormControlLabelProps } from '@mui/material';
import { FieldErrors } from 'react-hook-form';

export declare type BaseCheckboxProps = CheckboxProps;

export declare type CheckboxWithLabelProps = {
  /** ラベル */
  label: FormControlLabelProps['label'];
  /** react-hook-formのerrors */
  errors?: FieldErrors;
} & BaseCheckboxProps;

export { default as PrimaryCheckbox } from './PrimaryCheckbox';
