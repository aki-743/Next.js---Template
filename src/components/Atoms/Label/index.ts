import { BaseComponentProps } from '../../types';

export declare type BaseLabelProps = {
  /** inputとの紐付け */
  htmlFor?: string;
  /** inputのラベル */
  label?: string;
} & BaseComponentProps;

export { default as FormInputLabel } from './FormInputLabel';
