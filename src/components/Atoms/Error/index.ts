import { FieldErrors } from 'react-hook-form';
import { BaseComponentProps } from '../../types';

export declare type BaseErrorProps = BaseComponentProps;

export declare type InputValidateErrorProps = {
  /** react-hook-formのバリデートエラー */
  errors?: FieldErrors;
} & BaseErrorProps;

export { default as AsyncError } from './AsyncError';
export { default as InputValidateError } from './InputValidateError';
