import { FormControlLabelProps } from '@mui/material';
import { Ref } from 'react';
import { FieldErrors } from 'react-hook-form';
import { BaseCheckboxProps } from '../../Atoms/Checkbox';
import { BaseComponentProps } from '../../types';

export declare type CheckboxWithLabelProps = {
  /** ラベル */
  label: FormControlLabelProps['label'];
  /** チェックボックスのRef */
  checkboxRef?: Ref<HTMLButtonElement>;
  /** react-hook-formのerrors */
  errors?: FieldErrors;
} & BaseCheckboxProps &
  BaseComponentProps;

export { default as PrimaryCheckboxWithLabel } from './PrimaryCheckboxWithLabel';
