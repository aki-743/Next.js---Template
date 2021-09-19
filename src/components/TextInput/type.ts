import { ChangeEvent } from 'react';

export type BaseTextInputProps = {
  label?: string;
  value?: string;
  fullWidth?: boolean;
  type?: string;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  limit?: number;
  isRequired?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
